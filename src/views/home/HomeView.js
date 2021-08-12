import { html } from "lit";
import { live } from "lit/directives/live.js";
import { ComponentBase } from "../../ComponentBase";

class HomeView extends ComponentBase {
  static get properties() {
    return {
      todoItems: { type: Array },
      newTodoItem: { type: String },
      activeTodoItem: { type: Object },
      todoItemToDelete: { type: Object },
      todoItemToDeleteElement: { type: Object },
    };
  }

  constructor() {
    super();
    let existingTodoItems = JSON.parse(localStorage.getItem("todoItems"));
    if (existingTodoItems != null) {
      this.todoItems = existingTodoItems;
    } else {
      this.todoItems = [];
    }
    this.newTodoItem = "";
    this.todoItemToDelete = null;
    this.todoItemToDeleteElement = null;
  }

  render() {
    return html` <style>
        #new-todo-item {
          width: 100%;
          max-width: 1000px;
          padding: 0 var(--sl-spacing-medium);
          margin: var(--sl-spacing-large) auto;
        }

        #new-todo-item input {
          text-align: center;
        }

        .todo-item-cards {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 var(--sl-spacing-medium);
          margin-bottom: var(--sl-spacing-x-small);
        }

        .todo-item-card {
          margin-top: var(--sl-spacing-x-small);
          padding: var(--sl-spacing-x-large);
          box-shadow: var(--sl-shadow-medium);
        }

        .todo-item-card-text {
          padding-left: var(--sl-spacing-medium);
          display: inline-block;
          vertical-align: top;
          line-height: 30px;
          width: calc(100% - 150px);
          word-wrap: break-word;
        }

        .todo-item-card-delete-button {
          float: right;
          font-size: 30px;
        }

        .todo-item-card-delete-button::part(base) {
          padding: 0;
        }

        .todo-item-card-done-button {
          font-size: 30px;
        }

        .todo-item-card-done-button::part(base) {
          padding: 0;
        }

        .todo-item-card-done > .todo-item-card-text {
          color: var(--sl-color-gray-300);
          text-decoration: line-through;
        }
      </style>
      <sl-input
        type="text"
        id="new-todo-item"
        placeholder="Enter todo item"
        help-text="Press enter to add todo item."
        .value="${live(this.newTodoItem)}"
        @keyup="${this.inputNewTodoItem}"
      ></sl-input>
      <sl-details
        class="todo-item-cards todo-item-cards-open"
        summary="Open todos (${this.getOpenTodoItems().length})"
        open
      >
        ${this.renderTodoItems()}
      </sl-details>
      <sl-details class="todo-item-cards" 
                  summary="Todos done (${this.getDoneTodoItems().length})" 
                  open>
        ${this.renderTodoItemsDone()}
      </sl-details>
      <sl-dialog label="Are you sure?" id="todo-item-dialog">
        Do you want to delete
        ${this.todoItemToDelete != null
        ? '"' + this.todoItemToDelete.name + '"'
        : ""}?
        <sl-button slot="footer" type="primary" @click="${this.deleteTodoItem}"
          >Yes</sl-button
        >
      </sl-dialog>`;
  }

  renderTodoItems() {
    return this.getOpenTodoItems().map(
      (i) => html`
          <div class="todo-item-card animate__animated animate__bounceInRight">
            ${this.renderTodoItemContent(i)}
          </div>
        `
    );
  }

  renderTodoItemContent(todoItem) {
    if (this.activeTodoItem == todoItem) {
      return html`<sl-input
        class="todo-item-input-update"
        help-text="Press enter to save change, press escape to cancel change."
        value="${todoItem.name}"
        @keyup="${this.saveUpdatedText}"
      ></sl-input> `;
    } else {
      return html` ${this.renderTodoIcons(todoItem)}
        <span
          class="todo-item-card-text"
          @click="${(e) => this.changeToInputField(todoItem)}"
          >${todoItem.name}</span
        >
        ${this.renderTodoButtons(todoItem)}`;
    }
  }

  saveUpdatedText(event) {
    if (event.key === "Enter") {
      this.activeTodoItem.name = event.target.value;
      this.activeTodoItem = null;
      this.requestUpdate();
      this.saveTodoList();
    } else if (event.key === "Escape") {
      this.activeTodoItem = null;
      this.requestUpdate();
    }
  }

  changeToInputField(todoItem) {
    this.activeTodoItem = todoItem;
    this.requestUpdate();
    let self = this;
    setTimeout(function () {
      self.querySelector(".todo-item-input-update").focus();
    }, 150);
  }

  renderTodoItemsDone() {
    return this.getDoneTodoItems().map(
        (i) => html`
          <div
            class="todo-item-card todo-item-card-done animate__animated animate__bounceInRight"
          >
            ${this.renderTodoIcons(i)}
            <span class="todo-item-card-text">${i.name}</span>
            ${this.renderTodoButtons(i)}
          </div>
        `
      );
  }

  renderTodoIcons(todoItem) {
    if (!todoItem.done) {
      return html`<sl-icon-button
        class="todo-item-card-done-button"
        library="ionicons"
        name="ellipse-outline"
        @click="${(e) => this.changeTodoStatus(todoItem, true)}"
      >
      </sl-icon-button>`;
    } else {
      return html`<sl-icon-button
        class="todo-item-card-done-button"
        library="ionicons"
        name="checkmark-circle-outline"
        @click="${(e) => this.changeTodoStatus(todoItem, false)}"
      >
      </sl-icon-button>`;
    }
  }

  renderTodoButtons(todoItem) {
    return html`<sl-icon-button
      class="todo-item-card-delete-button"
      library="ionicons"
      name="trash-outline"
      @click="${(e) => this.openDeleteTodoItemDialog(e, todoItem)}"
    >
    </sl-icon-button>`;
  }

  openDeleteTodoItemDialog(e, todoItem) {
    let dialog = this.querySelector("#todo-item-dialog");
    this.todoItemToDelete = todoItem;
    this.todoItemToDeleteElement = e.target.closest(".todo-item-card");
    dialog.show();
  }

  deleteTodoItem() {
    this.todoItemToDeleteElement.classList.add(
      "animate__animated",
      "animate__zoomOut"
    );
    let self = this;
    setTimeout(function () {
      let dialog = self.querySelector("#todo-item-dialog");
      dialog.hide();
      self.requestUpdate();
      let index = self.todoItems.indexOf(self.todoItemToDelete);
      if (index > -1) {
        self.todoItems.splice(index, 1);
        self.todoItemToDeleteElement.classList.remove(
          "animate__animated",
          "animate__zoomOut"
        );
        self.requestUpdate();
      }
      self.saveTodoList();
    }, 300);
  }

  changeTodoStatus(todoItem, done) {
    todoItem.done = done;
    this.requestUpdate();
    this.saveTodoList();
  }

  inputNewTodoItem(event) {
    if (event.key === "Enter") {
      this.todoItems.push({
        name: event.target.value,
        done: false,
        createdAt: new Date(),
      });
      this.requestUpdate();
      this.newTodoItem = "";
      this.saveTodoList();
    }
  }

  saveTodoList() {
    localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
  }

  getOpenTodoItems() {
    return this.todoItems
      .filter((i) => i.done == false)
      .sort(function compare(a, b) {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateA - dateB;
      })
  }

  getDoneTodoItems() {
    return this.todoItems
      .filter((i) => i.done == true)
      .sort(function compare(a, b) {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateA - dateB;
      })
  }
}

customElements.define("home-view", HomeView);
