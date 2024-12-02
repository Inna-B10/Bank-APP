var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _RenderService_instances, replaceComponentTags_fn, applyModuleStyles_fn, _UserItem_instances, preventDefault_fn, _timeout, _NotificationService_instances, setTimeout_fn, _BASE_URL, _BASE_URL2, _handleSearch, _BASE_URL3, _isTypeLogin, _Auth_instances, validateFields_fn, _handleSubmit, _changeFormType, _CardInfo_instances, addListeners_fn, removeListeners_fn, _onBalanceUpdated, copyCardNumber_fn, toggleCvc_fn, _BASE_URL4, _DonutChart_instances, calculateTotalValue_fn, polarToCartesian_fn, createSvgElement_fn, createSvgGroupElement_fn, createPathElement_fn, createSvgPathElements_fn, getSvg_fn, _Statistics_instances, addListeners_fn2, removeListeners_fn2, onTransactionCompleted_fn, _BASE_URL5, _Transactions_instances, addListeners_fn3, removeListeners_fn3, _onTransactionCompleted, _routes, _currentRoute, _layout, _Router_instances, handleLinks_fn, handleRouteChange_fn, render_fn;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class ChildComponent {
  /**
   * Render the child component content
   * @returns {HTMLElement}
   */
  render() {
    throw new Error("Render method must be implemented in the child class");
  }
}
function formatCardNumberWithDashes(cardNumber) {
  return cardNumber.replace(/(\d{4})(?=\d)/g, "$1-");
}
function formatCardNumber(cardNumber) {
  const formattedNumber = cardNumber.replace(/\s/g, "").match(/.{1,4}/g);
  return formattedNumber ? formattedNumber.join(" ") : "";
}
class RQuery {
  constructor(selector) {
    if (typeof selector === "string") {
      this.element = document.querySelector(selector);
      if (!this.element) {
        throw new Error(`Element ${selector} not found!`);
      }
    } else if (selector instanceof HTMLElement) {
      this.element = selector;
    } else {
      throw new Error("Invalid selector type");
    }
  }
  /* ---------------------------------- Find ---------------------------------- */
  /**
   * Find the first element that matches the specified selector within the selected element.
   * @param {string} selector - A CSS selector string to search for within the selected element.
   * @returns {RQuery} A new RQuery instance for the found element.
   */
  find(selector) {
    const element = new RQuery(this.element.querySelector(selector));
    if (element) {
      return element;
    } else {
      throw new Error(`Element ${selector} not found!`);
    }
  }
  /* --------------------------------- FindAll -------------------------------- */
  /**
   * Find all elements that match the specified selector within the selected element
   * @param {string} selector - A CSS selector string to search for within the selected element
   * @returns {RQuery} An array of new RQuery instances for the found elements
   */
  findAll(selector) {
    const elements = this.element.querySelectorAll(selector);
    return Array.from(elements).map((element) => new RQuery(element));
  }
  /* --------------------------------- Append --------------------------------- */
  /**
   * Append a new element as a child of the selected element.
   * @param {HTMLElement} childElement - A new child element to append.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  append(childElement) {
    this.element.appendChild(childElement);
    return this;
  }
  /* --------------------------------- Before --------------------------------- */
  /**
   * Insert a new element before the selected element.
   * @param {HTMLElement} - A new element to insert before the selected element.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  before(newElement) {
    if (!(newElement instanceof HTMLElement)) {
      throw new Error("Element must be an HTMLElement");
    }
    const parentElement = this.element.parentElement;
    if (parentElement) {
      parentElement.insertBefore(newElement, this.element);
      return this;
    } else {
      throw new Error("Element does not have a parent element");
    }
  }
  /* ---------------------------------- Html ---------------------------------- */
  /**
   * Get or set the inner HTML of the selected element.
   * @param {string} [htmlContent] - Optional HTML content to set. If not provided, the current inner HTML will be returned.
   * @returns {RQuery|string} The current RQuery instance for chaining when setting HTML content, or the current inner HTML when getting.
   */
  html(htmlContent) {
    if (typeof htmlContent === "undefined") {
      return this.element.innerHTML;
    } else {
      this.element.innerHTML = htmlContent;
      return this;
    }
  }
  /* ---------------------------------- Text ---------------------------------- */
  /**
   * Get or set the text content of the selected element.
   * @param {string} [textContent] - Optional text content to set. If not provided, the current text content will be returned.
   * @returns {RQuery|string} The current RQuery instance for chaining when setting text content, or the current text content when getting.
   */
  text(textContent) {
    if (typeof textContent === "undefined") {
      return this.element.textContent;
    } else {
      this.element.textContent = textContent;
      return this;
    }
  }
  /* ---------------------------------- Click --------------------------------- */
  /**
   * Attach a click event listener to the selected element.
   * @param {function(Event): void} callback - The event listener function to execute when the selected element is clicked.
   * The function will receive the event object as its argument.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  click(callback) {
    this.element.addEventListener("click", callback);
    return this;
  }
  /* ----------------------------------- On ----------------------------------- */
  /**
   * Add an event listener to the selected element for the specified event type
   * @param {string} eventType - The type of event to listen for (e.g., 'click','input', ect.)
   * @param {function(Event): void} callback - The event listener function to execute when the event is triggered/ The function will receive the event object as its argument/
   * @returns {RQuery} The current RQuery instance for chaining
   */
  on(eventType, callback) {
    if (typeof eventType !== "string" || typeof callback !== "function") {
      throw new Error(
        "eventType must be a string and callback must be a function"
      );
    }
    this.element.addEventListener(eventType, callback);
    return this;
  }
  /* ---------------------------------- Value --------------------------------- */
  /**
   * Gets or sets the value of an input element.
   * @param {string} [newValue] - The new value to set for the input element. If not provided, the method returns the current value.
   * @return {string|RQuery} - If newValue is provided, returns the RQuery instance. Otherwise, returns the current value of the input element.
   */
  value(newValue) {
    if (typeof newValue === "undefined") {
      return this.element.value;
    } else {
      this.element.value = newValue;
      return this;
    }
  }
  /* --------------------------------- Submit --------------------------------- */
  /**
   * Set an event listener for the submit event of a form element.
   * @param {function(Event): void} onSubmit - The event listener for the form's submit event.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  submit(onSubmit) {
    if (this.element.tagName.toLowerCase() === "form") {
      this.element.addEventListener("submit", (e) => {
        e.preventDefault();
        onSubmit(e);
      });
    } else {
      throw new Error("Element must be a form");
    }
    return this;
  }
  /* ---------------------------------- Input --------------------------------- */
  /**
   * Set attributes and event listeners for an input element.
   * @param {object} options - An object containing input options
   * @param {function(Event): void} [options.onInput] - The event listener for the input's input event
   * @param {object} [options.rest] - Optional attributes to set on the input element
   * @returns {RQuery} The current RQuery instance for chaining
   */
  input({ onInput, ...rest }) {
    if (this.element.tagName.toLowerCase() !== "input") {
      throw new Error("Element must be an input");
    }
    for (const [key, value] of Object.entries(rest)) {
      this.element.setAttribute(key, value);
    }
    if (onInput) {
      this.element.addEventListener("input", onInput);
    }
    return this;
  }
  /* ------------------------------- NumberInput ------------------------------ */
  /**
   * Set attributes and event listeners for a number input element
   * @param {number} [limit] - The maximum length of input value
   * @returns {RQuery} The current RQuery instance for chaining
   */
  numberInput(limit) {
    if (this.element.tagName.toLowerCase() !== "input" || this.element.type !== "number") {
      throw new Error('Element must be an input with type "number"');
    }
    this.element.addEventListener("input", (event) => {
      let value = event.target.value.replace(/[^0-9]/g, "");
      if (limit) {
        value = value.substring(0, limit);
      }
      event.target.value = value;
    });
    return this;
  }
  /* ----------------------------- CreditCardInput ---------------------------- */
  /**
   * Set attributes and event listeners for a credit card input element
   * @returns {RQuery} The current RQuery instance for chaining
   */
  creditCardInput() {
    const limit = 16;
    if (this.element.tagName.toLowerCase() !== "input" || this.element.type !== "text") {
      throw new Error('Element must be an input with type "text"');
    }
    this.element.addEventListener("input", (event) => {
      let value = event.target.value.replace(/[^0-9]/g, "");
      value = value.substring(0, limit);
      event.target.value = formatCardNumberWithDashes(value);
    });
    return this;
  }
  /* ----------------------------------- Css ---------------------------------- */
  /**
   * Set the CSS style of the selected element.
   * @param {string} property - The CSS property to set.
   * @param {string} value - The value to set for the CSS property.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  css(property, value) {
    if (typeof property !== "string" || typeof value !== "string") {
      throw new Error("Property and value must be strings");
    }
    this.element.style[property] = value;
    return this;
  }
  /* -------------------------------- AddClass -------------------------------- */
  /**
   *
   * Adds a class or a list of classes to the current element.
   * @param {string | string[]} classNames - A single class name or an array of class names to add to the element.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  addClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.add(className);
      }
    } else {
      this.element.classList.add(classNames);
    }
    return this;
  }
  /* ------------------------------- RemoveClass ------------------------------ */
  /**
   *
   * Removes a class or a list of classes from the current element.
   * @param {string | string[]} classNames - A single class name or an array of class names to remove from the element.
   * @returns {RQuery} The current RQuery instance for chaining.
   */
  removeClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.remove(className);
      }
    } else {
      this.element.classList.remove(classNames);
    }
    return this;
  }
  /* ---------------------------------- Attr ---------------------------------- */
  /**
   * Set or get the value of an attribute on the selected element.
   * @param {string} attributeName - The name of the attribute to set or get.
   * @param {string} [value] - The value to set for the attribute. If not provided, the current value of the attribute will be returned.
   * @returns {RQuery|string} The current RQuery instance for chaining (if setting) or the attribute value (if getting).
   */
  attr(attributeName, value) {
    if (typeof attributeName !== "string") {
      throw new Error("Attribute name must be a string");
    }
    if (typeof value === "undefined") {
      return this.element.getAttribute(attributeName);
    } else {
      this.element.setAttribute(attributeName, value);
      return this;
    }
  }
  /* ------------------------------- RemoveAttr ------------------------------- */
  /**
   * Removes an attribute from the current element.
   * @param {string} attrName - The name of the attribute to remove.
   * @return {RQuery} - Returns the RQuery instance.
   */
  removeAttr(attrName) {
    if (typeof attrName !== "string") {
      throw new Error("attrName must be a string");
    }
    this.element.removeAttribute(attrName);
    return this;
  }
  /* ---------------------------------- Show ---------------------------------- */
  /**
   * Shows the selected element by removing the 'display' style property
   * @returns {RQuery} The current RQuery instance for chaining
   */
  show() {
    this.element.style.removeProperty("display");
    return this;
  }
  /* ---------------------------------- Hide ---------------------------------- */
  /**
   * Hides the selected element by setting its display style to 'none'
   * @returns {RQuery} The current RQuery instance for chaining
   */
  hide() {
    this.element.style.display = "none";
    return this;
  }
}
function $R(selector) {
  return new RQuery(selector);
}
class RenderService {
  constructor() {
    __privateAdd(this, _RenderService_instances);
  }
  /**
   * @param {string} html
   * @param {Array} components
   * @param {Object} [styles]
   * @returns {HTMLElement}
   */
  htmlToElement(html, components = [], styles2) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const element = doc.body.firstChild;
    if (styles2) {
      __privateMethod(this, _RenderService_instances, applyModuleStyles_fn).call(this, styles2, element);
    }
    __privateMethod(this, _RenderService_instances, replaceComponentTags_fn).call(this, element, components);
    return element;
  }
}
_RenderService_instances = new WeakSet();
/**
 * @param {HTMLElement} parentElement
 * @param {Array} components
 */
replaceComponentTags_fn = function(parentElement, components) {
  const componentTagPattern = /^component-/;
  const allElements = parentElement.getElementsByTagName("*");
  for (const element of allElements) {
    const elementTagName = element.tagName.toLowerCase();
    if (componentTagPattern.test(elementTagName)) {
      const componentName = elementTagName.replace(componentTagPattern, "").replace(/-/g, "");
      const foundComponent = components.find((Component) => {
        const instance = Component instanceof ChildComponent ? Component : new Component();
        return instance.constructor.name.toLowerCase() === componentName;
      });
      if (foundComponent) {
        const componentContent = foundComponent instanceof ChildComponent ? foundComponent.render() : new foundComponent().render();
        element.replaceWith(componentContent);
      } else {
        console.error(
          `Component "${componentName}" not found in the provided components array.`
        );
      }
    }
  }
};
/**
 * @param {Object} moduleStyles
 * @param {string} element
 * @returns {void}
 */
applyModuleStyles_fn = function(moduleStyles, element) {
  if (!element) return;
  const applyStyles = (element2) => {
    for (const [key, value] of Object.entries(moduleStyles)) {
      if (element2.classList.contains(key)) {
        element2.classList.remove(key);
        element2.classList.add(value);
      }
    }
  };
  if (element.getAttribute("class")) {
    applyStyles(element);
  }
  const elements = element.querySelectorAll("*");
  elements.forEach(applyStyles);
};
const renderService = new RenderService();
const layout = "_layout_35w8f_1";
const styles$m = {
  layout
};
class StorageService {
  /**
   * Retrieves an item from localStorage by the provided key.
   *
   * @param {string} key - The key of the item to be retrieved.
   * @returns {any} The value of the item, or null if the item doesn't exist.
   */
  getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  /**
   * Saves an item in localStorage with the provided key and value.
   *
   * @param {string} key - The key under which the value will be stored.
   * @param {any} value - The value to be stored.
   */
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  /**
   * Removes an item from localStorage by the provided key.
   *
   * @param {string} key - The key of the item to be removed.
   */
  removeItem(key) {
    localStorage.removeItem(key);
  }
  /**
   * Clears all data from localStorage.
   */
  clear() {
    localStorage.clear();
  }
}
const USER_STORAGE_KEY = "user";
const ACCESS_TOKEN_KEY = "accessToken";
class Store {
  /**
   * Create a new Store instance
   * @param {Object} initialState - The initial state for the store
   */
  constructor(initialState) {
    this.observers = [];
    this.storageService = new StorageService();
    const savedUser = this.storageService.getItem(USER_STORAGE_KEY);
    const state = savedUser ? { user: savedUser } : initialState;
    this.state = new Proxy(state, {
      set: (target, property, value) => {
        target[property] = value;
        this.notify();
        return true;
      }
    });
  }
  /**
   * Get the singleton instance of the Store
   * @returns {Store} The singleton instance of the Store
   */
  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store({ user: null });
    }
    return Store.instance;
  }
  /* ------------------------------- AddObserver ------------------------------ */
  /**
   * Add an observer to the store's list of observers.
   * @param {Object} observer - The observer object to add.
   */
  addObserver(observer) {
    this.observers.push(observer);
  }
  /* ----------------------------- RemoveObserver ----------------------------- */
  /**
   * Remove an observer from the store's list of observers
   * @param {Object} observer - The observer object to remove
   */
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  /* --------------------------------- Notify --------------------------------- */
  /**
   * Notify all observers of the state changes
   */
  notify() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
  /* ---------------------------------- Login --------------------------------- */
  /**
   * Log in a user and update the state and storage service
   * @param {Object} user - The user object to log in
   */
  login(user, accessToken) {
    this.state.user = user;
    this.storageService.setItem(USER_STORAGE_KEY, user);
    this.storageService.setItem(ACCESS_TOKEN_KEY, accessToken);
  }
  /* --------------------------------- Logout --------------------------------- */
  /**
   * Log out the user, update the state, and remove the user from the storage service
   */
  logout() {
    this.state.user = null;
    this.storageService.removeItem(USER_STORAGE_KEY);
    this.storageService.removeItem(ACCESS_TOKEN_KEY);
  }
  /* ------------------------------- UpdateCard ------------------------------- */
  /**
   * Update user's card
   * @param {Object} - The card object
   */
  updateCard(card) {
    const oldUser = this.state.user;
    const newUser = { ...oldUser, card };
    this.state.user = newUser;
    this.storageService.setItem(USER_STORAGE_KEY, newUser);
  }
}
const grey = "_grey_1d2sm_19";
const styles$l = {
  "user-item": "_user-item_1d2sm_1",
  grey
};
const template$n = "<button class='user-item'>\r\n	<img alt='' />\r\n	<span></span>\r\n</button>\r\n";
class UserItem extends ChildComponent {
  constructor(user, isGrey = false, onClick) {
    super();
    __privateAdd(this, _UserItem_instances);
    if (!user) throw new Error("User should be passed!");
    if (!(user == null ? void 0 : user.name)) throw new Error('User must have a "name"!');
    if (!(user == null ? void 0 : user.avatarPath)) throw new Error('User must have a "avatarPath"!');
    this.user = user;
    this.onClick = onClick;
    this.isGrey = isGrey;
  }
  update({ avatarPath, name }) {
    if (avatarPath && name) {
      $R(this.element).find("img").attr("src", avatarPath).attr("alt", name);
      $R(this.element).find("span").text(name);
    }
  }
  render() {
    this.element = renderService.htmlToElement(template$n, [], styles$l);
    this.update(this.user);
    $R(this.element).click(this.onClick || __privateMethod(this, _UserItem_instances, preventDefault_fn).bind(this));
    if (!this.onClick) $R(this.element).attr("disabled", "");
    if (this.isGrey) $R(this.element).addClass(styles$l.grey);
    return this.element;
  }
}
_UserItem_instances = new WeakSet();
preventDefault_fn = function(event) {
  event.preventDefault();
};
const header = "_header_1u6es_1";
const styles$k = {
  header,
  "right-side": "_right-side_1u6es_6"
};
const template$m = "<header class='header'>	\r\n	<component-logo></component-logo>\r\n	<div id='auth-side' class='right-side'>\r\n		<component-search></component-search>\r\n		<component-user-item></component-user-item>\r\n		<component-logout-button></component-logout-button>\r\n	</div>\r\n\r\n</header>\r\n";
const logo = "_logo_1sb92_1";
const styles$j = {
  logo
};
const template$l = "<nav class='logo'>\r\n	<a href='./' title='Home'> Obsidian Bank </a>\r\n</nav>\r\n";
class Logo extends ChildComponent {
  render() {
    this.element = renderService.htmlToElement(template$l, [], styles$j);
    return this.element;
  }
}
const logout = "_logout_yeasz_1";
const styles$i = {
  logout
};
const template$k = "<div class='logout'>\r\n	<button title='Logout'>\r\n		<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r\n			<path stroke-linecap='round' stroke-linejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9' />\r\n		</svg>\r\n	</button>\r\n</div>";
class LogoutButton extends ChildComponent {
  constructor({ router }) {
    super();
    this.store = Store.getInstance();
    this.user = this.store.state.user;
    this.router = router;
  }
  render() {
    this.element = renderService.htmlToElement(template$k, [], styles$i);
    $R(this.element).find("button").click(() => {
      this.store.logout();
      this.router.navigate("./auth");
    });
    return this.element;
  }
}
const notification = "_notification_1ykxd_1";
const slideIn$1 = "_slideIn_1ykxd_1";
const error = "_error_1ykxd_14";
const success = "_success_1ykxd_14";
const styles$h = {
  notification,
  slideIn: slideIn$1,
  error,
  success
};
class NotificationService {
  constructor() {
    __privateAdd(this, _NotificationService_instances);
    __privateAdd(this, _timeout);
    __privateSet(this, _timeout, null);
  }
  /**
   * Show a notification with a specified message and type.
   * The notification will automatically hide after a specified duration.
   * @param {string} message - The message to be displayed in the notification.
   * @param {('success'|'error')} type - The type of the notification, only 'success' or 'error' are accepted.
   */
  show(type, message) {
    if (!["success", "error"].includes(type)) {
      throw new Error(
        'Invalid notification type. Allowed types are "success" and "error".'
      );
    }
    const classNames = {
      success: styles$h.success,
      error: styles$h.error
    };
    const notificationElement = $R("#notification");
    const className = classNames[type];
    notificationElement.text(message).addClass(className);
    __privateMethod(this, _NotificationService_instances, setTimeout_fn).call(this, () => {
      notificationElement.removeClass(className);
    }, 3e3);
  }
}
_timeout = new WeakMap();
_NotificationService_instances = new WeakSet();
setTimeout_fn = function(callback, duration) {
  if (__privateGet(this, _timeout)) {
    clearTimeout(__privateGet(this, _timeout));
  }
  __privateSet(this, _timeout, setTimeout(callback, duration));
};
const COLORS = {
  error: "rgb(255 74 74 / 61%)"
};
class ValidationService {
  constructor() {
    this.errorBorderTimeout = {};
  }
  showError(element, timeout = 2500) {
    element.css("border-color", COLORS.error);
    if (this.errorBorderTimeout[element]) {
      clearTimeout(this.errorBorderTimeout[element]);
    }
    this.errorBorderTimeout[element] = setTimeout(() => {
      element.css("border-color", "");
    }, timeout);
  }
}
const validationService = new ValidationService();
const button = "_button_5jjbu_1";
const green$1 = "_green_5jjbu_18";
const purple$1 = "_purple_5jjbu_24";
const styles$g = {
  button,
  green: green$1,
  purple: purple$1
};
const template$j = "<button class='button'></button>\r\n";
class Button extends ChildComponent {
  constructor({ children, onClick, variant }) {
    super();
    if (!children) {
      throw new Error("Children is empty!");
    }
    this.children = children;
    this.onClick = onClick;
    this.variant = variant;
  }
  render() {
    this.element = renderService.htmlToElement(template$j, [], styles$g);
    $R(this.element).html(this.children).click(this.onClick);
    if (this.variant) {
      $R(this.element).addClass(styles$g[this.variant]);
    }
    return this.element;
  }
}
const field = "_field_1y2ef_1";
const styles$f = {
  field
};
const template$i = "<label class='field'>\r\n	<input />\r\n</label>\r\n";
class Field extends ChildComponent {
  constructor({ placeholder, type = "text", value = "", name, variant }) {
    super();
    if (!name) {
      throw new Error('Please fill field parameter "name"!');
    }
    this.placeholder = placeholder;
    this.type = type;
    this.value = value;
    this.name = name;
    this.variant = variant;
  }
  render() {
    this.element = renderService.htmlToElement(template$i, [], styles$f);
    const inputElement = $R(this.element).find("input").input({
      placeholder: this.placeholder,
      type: this.type,
      value: this.value,
      name: this.name
    });
    if (this.type === "number") {
      inputElement.numberInput();
    }
    const isCreditCard = this.variant === "credit-card";
    if (isCreditCard) {
      inputElement.creditCardInput();
    }
    return this.element;
  }
}
const SERVER_URL = "http://localhost:4200";
function extractErrorMessage(errorData) {
  return typeof errorData.message === "object" ? errorData.message[0] : errorData.message;
}
async function obQuery({
  path,
  body = null,
  headers = {},
  method = "GET",
  onError = null,
  onSuccess = null
}) {
  let isLoading = true, error2 = null, data = null;
  const url = `${SERVER_URL}/api${path}`;
  const accessToken = new StorageService().getItem(ACCESS_TOKEN_KEY);
  const requestOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };
  if (accessToken) {
    requestOptions.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (body) {
    requestOptions.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      data = await response.json();
      if (onSuccess) {
        onSuccess(data);
      }
    } else {
      const errorData = await response.json();
      const errorMessage = extractErrorMessage(errorData);
      if (onError) {
        onError(errorMessage);
      }
      new NotificationService().show("error", errorMessage);
    }
  } catch (errorData) {
    const errorMessage = extractErrorMessage(errorData);
    if (onError) {
      onError(errorMessage);
    }
  } finally {
    isLoading = false;
  }
  return { isLoading, error: error2, data };
}
class CardService {
  constructor() {
    __privateAdd(this, _BASE_URL, "/cards");
    this.store = Store.getInstance().state;
    this.notificationService = new NotificationService();
  }
  /* --------------------------------- ByUser --------------------------------- */
  byUser(onSuccess) {
    return obQuery({
      path: `${__privateGet(this, _BASE_URL)}/by-user`,
      onSuccess
    });
  }
  /* ------------------------------ UpdateBalance ----------------------------- */
  /**
   * Updates the user's balance with the specified amount and type.
   *
   * @param {number} amount - The amount to be added or withdrawn from the user's balance.
   * @param {'top-up' | 'withdrawal'} type - The type of the transaction, either "top-up" or "withdrawal".
   * @param {function} onSuccess - The callback function to be executed when the balance update is successful.
   * @returns {Promise} A Promise object that resolves to the response from the API.
   */
  updateBalance(amount, type, onSuccess) {
    return obQuery({
      path: `${__privateGet(this, _BASE_URL)}/balance/${type}`,
      method: "PATCH",
      body: { amount: +amount },
      onSuccess: () => {
        this.notificationService.show(
          "success",
          "Balance successfully changed!"
        );
        onSuccess();
      }
    });
  }
  /* -------------------------------- Transfer -------------------------------- */
  /**
   * Transfers money between two card numbers.
   *
   * @function
   * @param {Object} body - The transfer details.
   * @param {number} body.amount - The amount to be transferred.
   * @param {string} body.toCardNumber - The recipient's card number.
   * @param {Function} onSuccess - The callback function to be executed upon successful transfer.
   * @returns {Promise} A promise that resolves with the obQuery response.
   */
  transfer({ amount, toCardNumber }, onSuccess) {
    return obQuery({
      path: `${__privateGet(this, _BASE_URL)}/transfer-money`,
      method: "PATCH",
      body: {
        amount: +amount,
        fromCardNumber: this.store.user.card.number,
        toCardNumber
      },
      onSuccess: () => {
        this.notificationService.show(
          "success",
          "Transfer successfully completed!"
        );
        onSuccess();
      }
    });
  }
}
_BASE_URL = new WeakMap();
const styles$e = {
  "transfer-field": "_transfer-field_lzd97_1"
};
const template$h = "<div class='transfer-field'>\n	<component-field></component-field>\n	<component-button></component-button>\n</div>";
const BALANCE_UPDATED = "balanceUpdated";
const TRANSACTION_COMPLETED = "transactionCompleted";
const TRANSFER_FIELD_SELECTOR = '[name="card-number"]';
class TransferField extends ChildComponent {
  constructor() {
    super();
    __publicField(this, "handleTransfer", (event) => {
      event.preventDefault();
      if (!this.store.user) {
        this.notificationService.show("error", "You need authorization!");
      }
      $R(event.target).text("Sending...").attr("disabled", true);
      const inputElement = $R(this.element).find("input");
      const toCardNumber = inputElement.value().replaceAll("-", "");
      const reset = () => {
        $R(event.target).removeAttr("disabled").text("Send");
        inputElement.value("");
      };
      if (!toCardNumber) {
        validationService.showError($R(this.element).find("label"));
        reset();
        return;
      }
      let amount = prompt("Transfer amount");
      this.cardService.transfer({ amount, toCardNumber }, () => {
        inputElement.value("");
        amount = "";
        document.dispatchEvent(new Event(TRANSACTION_COMPLETED));
        document.dispatchEvent(new Event(BALANCE_UPDATED));
      });
      reset();
    });
    this.store = Store.getInstance().state;
    this.cardService = new CardService();
    this.notificationService = new NotificationService();
  }
  render() {
    this.element = renderService.htmlToElement(
      template$h,
      [
        new Field({
          name: "card-number",
          placeholder: "xxxx-xxxx-xxxx-xxxx",
          variant: "credit-card"
        }),
        new Button({
          children: "Send",
          variant: "purple",
          onClick: this.handleTransfer
        })
      ],
      styles$e
    );
    if (!this.store.user) {
      $R(this.element).find("input").attr("disabled", true);
    }
    return this.element;
  }
}
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
class UserService {
  constructor() {
    __privateAdd(this, _BASE_URL2, "/users");
  }
  getAll(searchTerm, onSuccess) {
    return obQuery({
      path: `${__privateGet(this, _BASE_URL2)}${searchTerm ? `?${new URLSearchParams({ searchTerm })}` : ""}`,
      onSuccess
    });
  }
}
_BASE_URL2 = new WeakMap();
const search = "_search_ibd97_1";
const results = "_results_ibd97_19";
const showIn = "_showIn_ibd97_1";
const item = "_item_ibd97_32";
const visible = "_visible_ibd97_37";
const styles$d = {
  search,
  results,
  showIn,
  item,
  visible
};
const template$g = "<div class='search'>\r\n	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r\n		<path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />\r\n	</svg>\r\n	<input />\r\n\r\n	<div class='results' id='search-results'></div>\r\n</div>\r\n";
class Search extends ChildComponent {
  constructor() {
    super();
    __privateAdd(this, _handleSearch, async (event) => {
      const searchTerm = event.target.value;
      const searchResultElement = $R(this.element).find("#search-results");
      if (!searchTerm) {
        searchResultElement.html("");
        return;
      }
      await this.userService.getAll(searchTerm, (users) => {
        searchResultElement.html("");
        users.forEach((user, index) => {
          const userItem = new UserItem(user, true, () => {
            $R(TRANSFER_FIELD_SELECTOR).value(
              formatCardNumberWithDashes(user.card.number)
            );
            searchResultElement.html("");
          }).render();
          $R(userItem).addClass(styles$d.item).css("transition-delay", `${index * 0.1}s`);
          searchResultElement.append(userItem);
          setTimeout(() => {
            $R(userItem).addClass(styles$d.visible);
          }, 50);
        });
      });
    });
    this.userService = new UserService();
  }
  render() {
    this.element = renderService.htmlToElement(template$g, [], styles$d);
    const debouncedHandleSearch = debounce(__privateGet(this, _handleSearch), 300);
    $R(this.element).find("input").input({
      type: "search",
      name: "search",
      placeholder: "Search contacts..."
    }).on("input", debouncedHandleSearch);
    return this.element;
  }
}
_handleSearch = new WeakMap();
class Header extends ChildComponent {
  constructor({ router }) {
    super();
    this.store = Store.getInstance();
    this.store.addObserver(this);
    this.router = router;
    this.userItem = new UserItem({
      avatarPath: "./",
      name: "User"
    });
  }
  update() {
    this.user = this.store.state.user;
    const authSideElement = $R(this.element).find("#auth-side");
    if (this.user) {
      authSideElement.show();
      this.userItem.update(this.user);
      this.router.navigate("./");
    } else {
      authSideElement.hide();
    }
  }
  render() {
    this.element = renderService.htmlToElement(
      template$m,
      [Logo, new LogoutButton({ router: this.router }), Search, this.userItem],
      styles$k
    );
    this.update();
    return this.element;
  }
}
const template$f = "<section class='layout'>\r\n	<main>\r\n		<component-notification></component-notification>\r\n		<div id='content'></div>\r\n	</main>\r\n</section>\r\n";
const template$e = "<div class='notification' id='notification'></div>";
class Notification extends ChildComponent {
  render() {
    this.element = renderService.htmlToElement(template$e, [], styles$h);
    return this.element;
  }
}
class Layout extends ChildComponent {
  constructor({ router, children }) {
    super();
    this.router = router;
    this.children = children;
  }
  render() {
    this.element = renderService.htmlToElement(template$f, [Notification], styles$m);
    const mainElement = $R(this.element).find("main");
    const contentContainer = $R(this.element).find("#content");
    contentContainer.append(this.children);
    mainElement.before(new Header({ router: this.router }).render()).append(contentContainer.element);
    return this.element;
  }
}
const SITE_NAME = "Obsidian Bank";
const getTitle = (title) => {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
};
class BaseScreen {
  /**
   * Create a new BaseScreen instance
   * @param {Object} options - the options for the BaseScreen
   * @param {string} options.title - the title for the screen
   */
  constructor({ title }) {
    document.title = getTitle(title);
  }
  /**
   * Render the child component content
   * @returns {HTMLElement}
   */
  render() {
    throw new Error("Render method must be implemented in the child class");
  }
}
class NotFound extends BaseScreen {
  constructor() {
    super({ title: "Not Found" });
  }
  render() {
    return "<p>Not Found</p>";
  }
}
class About extends BaseScreen {
  constructor() {
    super({ title: "About" });
  }
  render() {
    return "<p>About</p>";
  }
}
class FormService {
  /**
   * Retrieves the values of input elements within a form element
   * @param {HTMLFormElement} formElement - The element containing input elements
   * @returns {object} An object containing the input element's name  as the key and its value as the value
   */
  getFormValues(formElement) {
    const inputs = formElement.querySelectorAll("input");
    const values = {};
    for (const input of inputs) {
      values[input.name] = input.value;
    }
    return values;
  }
}
const formService = new FormService();
class AuthService {
  constructor() {
    __privateAdd(this, _BASE_URL3, "/auth");
    this.store = Store.getInstance();
    this.notificationService = new NotificationService();
  }
  main(type, body) {
    return obQuery({
      path: `${__privateGet(this, _BASE_URL3)}/${type}`,
      body,
      onSuccess: (data) => {
        this.store.login(data.user, data.accessToken);
        this.notificationService.show(
          "success",
          "You have successfully logged in !"
        );
      },
      method: "POST"
    });
  }
}
_BASE_URL3 = new WeakMap();
const auth = "_auth_ya0cv_1";
const styles$c = {
  auth
};
const template$d = "<div class='auth'>\n	<form>\n		<h1>Sign in</h1>\n		<div id='auth-inputs'></div>\n		<div style='text-align: center;'>\n		<component-button></component-button>\n		</div>\n		<footer>\n			<button id='change-form-type'>Register</button>\n		</footer>\n	</form>\n</div>\n";
class Auth extends BaseScreen {
  constructor() {
    super({ title: "Auth" });
    __privateAdd(this, _Auth_instances);
    __privateAdd(this, _isTypeLogin, true);
    __privateAdd(this, _handleSubmit, (event) => {
      const formValues = formService.getFormValues(event.target);
      if (!__privateMethod(this, _Auth_instances, validateFields_fn).call(this, formValues)) return;
      const type = __privateGet(this, _isTypeLogin) ? "login" : "register";
      this.authService.main(type, formValues);
    });
    __privateAdd(this, _changeFormType, (event) => {
      event.preventDefault();
      $R(this.element).find("h1").text(__privateGet(this, _isTypeLogin) ? "Register" : "Sign In");
      $R(event.target).text(__privateGet(this, _isTypeLogin) ? "Sign In" : "Register");
      __privateSet(this, _isTypeLogin, !__privateGet(this, _isTypeLogin));
    });
    this.authService = new AuthService();
  }
  render() {
    this.element = renderService.htmlToElement(
      template$d,
      [
        new Button({
          children: "Submit"
        })
      ],
      styles$c
    );
    $R(this.element).find("#auth-inputs").append(
      new Field({
        name: "email",
        placeholder: "Email",
        type: "email"
      }).render()
    ).append(
      new Field({
        name: "password",
        placeholder: "Password",
        type: "password"
      }).render()
    );
    $R(this.element).find("#change-form-type").click(__privateGet(this, _changeFormType));
    $R(this.element).find("form").submit(__privateGet(this, _handleSubmit));
    return this.element;
  }
}
_isTypeLogin = new WeakMap();
_Auth_instances = new WeakSet();
validateFields_fn = function(formValues) {
  const emailLabel = $R(this.element).find("label:first-child");
  const passwordLabel = $R(this.element).find("label:last-child");
  if (!formValues.email) {
    validationService.showError(emailLabel);
  }
  if (!formValues.password) {
    validationService.showError(passwordLabel);
  }
  return formValues.email && formValues.password;
};
_handleSubmit = new WeakMap();
_changeFormType = new WeakMap();
const styles$b = {
  "auth-required-message": "_auth-required-message_1abjg_1"
};
const template$c = "<div class='auth-required-message'>\n  <span>\n      To view this page,&nbsp; please log in first&nbsp;  -&nbsp;  <a href='./auth'>Go to login</a>\n  </span>\n</div>";
class AuthRequiredMessage extends ChildComponent {
  render() {
    this.element = renderService.htmlToElement(template$c, [], styles$b);
    return this.element;
  }
}
const home = "_home_18eeu_1";
const styles$a = {
  home
};
const actions = "_actions_4r799_1";
const styles$9 = {
  actions
};
const template$b = "<div class='actions'>\n	<component-field></component-field>\n	<div id='action-buttons'></div>\n</div>";
class Actions extends ChildComponent {
  constructor() {
    super();
    this.store = Store.getInstance().state;
    this.cardService = new CardService();
    this.notificationService = new NotificationService();
  }
  /* ------------------------------ UpdateBalance ----------------------------- */
  /**
   * @param {Event} event - The event object from the button click event.
   * @param {'top-up' | 'withdrawal'} type - The type of the transaction, either "top-up" or "withdrawal".
   */
  updateBalance(event, type) {
    event.preventDefault();
    if (!this.store.user) {
      this.notificationService.show("error", "You need authorization!");
    }
    $R(event.target).text("Sending...").attr("disabled", true);
    const inputElement = $R(this.element).find("input");
    const amount = inputElement.value();
    if (!amount) {
      validationService.showError($R(this.element).find("label"));
      $R(event.target).removeAttr("disabled").text(type);
      return;
    }
    this.cardService.updateBalance(amount, type, () => {
      inputElement.value("");
      const balanceUpdatedEvent = new Event(BALANCE_UPDATED);
      document.dispatchEvent(balanceUpdatedEvent);
    });
    $R(event.target).removeAttr("disabled").text(type);
  }
  render() {
    this.element = renderService.htmlToElement(
      template$b,
      [
        new Field({
          name: "amount",
          placeholder: "Enter amount",
          type: "number"
        })
      ],
      styles$9
    );
    $R(this.element).find("#action-buttons").append(
      new Button({
        children: "Top-up",
        variant: "green",
        onClick: (e) => this.updateBalance(e, "top-up")
      }).render()
    ).append(
      new Button({
        children: "Withdrawal",
        variant: "purple",
        onClick: (e) => this.updateBalance(e, "withdrawal")
      }).render()
    );
    if (!this.store.user) {
      $R(this.element).find("input").attr("disabled", true);
    }
    return this.element;
  }
}
const template$a = "<svg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' x='0' y='0' style='height:100%;width:100%;background:0 0;shape-rendering:auto' version='1.1' viewBox='0 0 100 100' data-component='loader'>\r\n	<g class='ldl-scale' style='transform-origin:50% 50%;transform:rotate(0deg) scale(.8,.8)'>\r\n		<g class='ldl-ani'>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.625s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#a0c8d7' d='m74.801 28.264 2.361-3.714 1.385 1.691a34.18 34.18 0 0 1 5.782 10.205c1.082 3.032 1.857 8.047 1.94 12.002l4.456-2.154 4.046 2.784c-.063-5.485-1.339-12.816-3.097-17.155a43.059 43.059 0 0 0-8.978-13.816l-.866-.896 2.23-3.508-14.881.145 5.622 14.416z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.694444s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#a0c8d7' d='M39.166 15.789a34.187 34.187 0 0 1 11.492-2.345c3.216-.098 8.227.721 12.013 1.864L62 10.404l3.899-2.987C60.662 5.782 53.3 4.729 48.626 5.061A43.072 43.072 0 0 0 32.711 9.33l-1.12.547-2.646-3.204-4.461 14.197 15.449-.892-2.803-3.394 2.036-.795z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.763889s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#a0c8d7' d='m17.184 52.196-.127-2.182a34.167 34.167 0 0 1 1.322-11.655c.907-3.088 3.228-7.602 5.485-10.849l-4.871-.876-1.637-4.63c-3.173 4.474-6.45 11.154-7.578 15.699a43.073 43.073 0 0 0-.858 16.454l.174 1.234-3.865 1.526 12.123 8.63 3.926-14.968-4.094 1.617z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.833333s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#a0c8d7' d='m44.617 77.778.272 4.393-2.114-.553a34.2 34.2 0 0 1-10.676-4.857c-2.658-1.818-6.232-5.419-8.623-8.569l-2.338 4.362-4.91.126c3.275 4.4 8.615 9.581 12.589 12.057a43.086 43.086 0 0 0 15.385 5.901l1.227.216.255 4.146 11.954-8.864-13.021-8.358z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.902778s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#a0c8d7' d='m89.669 54.184-11.974 9.802 4.262 1.098-1.179 1.84a34.204 34.204 0 0 1-7.919 8.653c-2.55 1.966-7.08 4.253-10.815 5.553l3.425 3.572-1.398 4.707c5.197-1.754 11.775-5.232 15.358-8.246a43.093 43.093 0 0 0 10.366-12.808l.585-1.101 4.024 1.037-4.735-14.107z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -.972222s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#f8b26a' d='M50.966 28.286c-11.494 0-20.844 9.351-20.844 20.844 0 11.494 9.351 20.845 20.844 20.845 11.494 0 20.845-9.351 20.845-20.845 0-11.493-9.352-20.844-20.845-20.844z' class='ldl-ani' style='fill:#4f5157' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -1.04167s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#f5e6c8' d='M50.966 24.131c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.216 25-25-11.216-25-25-25zm0 45.845c-11.494 0-20.844-9.351-20.844-20.845 0-11.494 9.351-20.844 20.844-20.844 11.494 0 20.845 9.351 20.845 20.844s-9.352 20.845-20.845 20.845z' class='ldl-ani' style='fill:#d2d2d2' />\r\n			</g>\r\n			<g class='ldl-layer' style='transform-origin:50px 50px;transform:scale(.91);animation:1.11111s linear -1.11111s infinite normal forwards running breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n				<path fill='#f5e6c8' d='M52.962 46.777c-3.03-1.14-4.277-1.889-4.277-3.065 0-.999.749-1.997 3.066-1.997 1.273 0 2.317.202 3.16.453 1.106.329 2.259-.356 2.546-1.473a2.07 2.07 0 0 0-1.498-2.513c-.882-.232-1.934-.401-3.21-.459v-1.39a1.746 1.746 0 1 0-3.492 0v1.639c-3.814.749-6.025 3.208-6.025 6.345 0 3.457 2.602 5.239 6.416 6.523 2.638.892 3.778 1.747 3.778 3.101 0 1.426-1.39 2.21-3.421 2.21-1.39 0-2.703-.269-3.855-.662-1.132-.386-2.355.237-2.653 1.395l-.043.167a2.057 2.057 0 0 0 1.342 2.469c1.24.407 2.746.697 4.281.765v1.64c0 .965.782 1.746 1.746 1.746h.001c.965 0 1.746-.782 1.746-1.746v-1.89c4.098-.713 6.345-3.421 6.345-6.594 0-3.205-1.712-5.166-5.953-6.664z' class='ldl-ani' style='fill:#d2d2d2' />\r\n			</g>\r\n		</g>\r\n	</g>\r\n	<style id='breath-853b0b7b-a60c-4c08-a5c3-c749855f7945'>\r\n		@keyframes breath-853b0b7b-a60c-4c08-a5c3-c749855f7945 {\r\n			0% {\r\n				animation-timing-function: cubic-bezier(.9647, .2413, -.0705, .7911);\r\n				transform: scale(.9099999999999999)\r\n			}\r\n\r\n			51% {\r\n				animation-timing-function: cubic-bezier(.9226, .2631, -.0308, .7628);\r\n				transform: scale(1.02994)\r\n			}\r\n\r\n			to {\r\n				transform: scale(.9099999999999999)\r\n			}\r\n		}\r\n	</style>\r\n</svg>";
const LOADER_SELECTOR = '[data-component="loader"]';
class Loader extends ChildComponent {
  constructor(width = 100, height = 100) {
    super();
    this.width = width;
    this.height = height;
  }
  render() {
    this.element = renderService.htmlToElement(template$a, []);
    this.element.style = `width: ${this.width}px; height: ${this.height}px`;
    this.element.classList.add("bounce");
    return this.element;
  }
}
function formatToCurrency(number) {
  return new Intl.NumberFormat("no-NO", {
    currency: "NOK",
    style: "currency"
  }).format(number);
}
const line = "_line_f61m5_9";
const cvc = "_cvc_f61m5_61";
const styles$8 = {
  "card-info": "_card-info_f61m5_1",
  line,
  "card-number": "_card-number_f61m5_15",
  "card-icon": "_card-icon_f61m5_15",
  cvc
};
const template$9 = "<section class='card-info'>\r\n	<div class='card-number'>\r\n		<div class='card-icon'>\r\n			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r\n				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />\r\n			</svg>\r\n		</div>\r\n\r\n		<div>\r\n			<span>Card number</span>\r\n			<span id='card-number' style='cursor: pointer;'></span>\r\n		</div>\r\n	</div>\r\n	<div class='line'></div>\r\n	<div>\r\n		<div>\r\n			<span>Expire date</span>\r\n			<span id='card-expire-date'></span>\r\n		</div>\r\n	</div>\r\n	<div class='line'></div>\r\n	<div>\r\n		<div class='cvc'>\r\n			<span>CVC</span>\r\n			<div>\r\n				<span id='card-cvc'></span>\r\n				<button id='toggle-cvc'>\r\n					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>\r\n						<path stroke-linecap='round' stroke-linejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' />\r\n						<path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />\r\n					</svg>\r\n				</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class='line'></div>\r\n	<div>\r\n		<div>\r\n			<span>Balance</span>\r\n			<span id='card-balance'></span>\r\n		</div>\r\n	</div>\r\n	</div>\r\n</section>";
const CODE = "*****";
class CardInfo extends ChildComponent {
  constructor() {
    super();
    __privateAdd(this, _CardInfo_instances);
    __privateAdd(this, _onBalanceUpdated, () => {
      this.fetchData();
    });
    this.store = Store.getInstance();
    this.cardService = new CardService();
    this.element = renderService.htmlToElement(template$9, [], styles$8);
    __privateMethod(this, _CardInfo_instances, addListeners_fn).call(this);
  }
  destroy() {
    __privateMethod(this, _CardInfo_instances, removeListeners_fn).call(this);
  }
  fillElements() {
    $R(this.element).html(
      renderService.htmlToElement(template$9, [], styles$8).innerHTML
    );
    $R(this.element).findAll(":scope > div").forEach((child) => {
      child.addClass("fade-in");
    });
    $R(this.element).find("#card-number").text(formatCardNumber(this.card.number)).click(__privateMethod(this, _CardInfo_instances, copyCardNumber_fn).bind(this));
    $R(this.element).find("#card-expire-date").text(this.card.expireDate);
    const cardCvcElement = $R(this.element).find("#card-cvc");
    cardCvcElement.text(CODE).css("width", "44px");
    $R(this.element).find("#toggle-cvc").click(__privateMethod(this, _CardInfo_instances, toggleCvc_fn).bind(this, cardCvcElement));
    $R(this.element).find("#card-balance").text(formatToCurrency(this.card.balance));
  }
  fetchData() {
    this.cardService.byUser((data) => {
      if (data == null ? void 0 : data.id) {
        this.card = data;
        this.fillElements();
        this.store.updateCard(data);
      } else {
        this.store.updateCard(null);
      }
    });
  }
  render() {
    if (this.store.state.user) {
      $R(this.element).html(new Loader().render().outerHTML);
      setTimeout(() => this.fetchData(), 500);
    }
    return this.element;
  }
}
_CardInfo_instances = new WeakSet();
addListeners_fn = function() {
  document.addEventListener(BALANCE_UPDATED, __privateGet(this, _onBalanceUpdated));
};
removeListeners_fn = function() {
  document.removeEventListener(BALANCE_UPDATED, __privateGet(this, _onBalanceUpdated));
};
_onBalanceUpdated = new WeakMap();
copyCardNumber_fn = function(e) {
  navigator.clipboard.writeText(e.target.innerText).then(() => {
    e.target.innerText = "Card number copied!";
    setTimeout(() => {
      e.target.innerText = formatCardNumber(this.card.number);
    }, 2e3);
  });
};
toggleCvc_fn = function(cardCvcElement) {
  const text = cardCvcElement.text();
  text === CODE ? cardCvcElement.text(this.card.cvc) : cardCvcElement.text(CODE);
};
const heading = "_heading_uqm0e_1";
const styles$7 = {
  heading
};
const template$8 = "<div class='heading'>\n\n</div>";
class Heading extends ChildComponent {
  constructor(title = "") {
    super();
    this.title = title;
  }
  render() {
    this.element = renderService.htmlToElement(template$8, [], styles$7);
    $R(this.element).text(this.title);
    return this.element;
  }
}
const contacts = "_contacts_1y9d8_1";
const styles$6 = {
  contacts
};
const template$7 = "<div class='contacts'>\n	<component-heading></component-heading>\n	<component-transfer-field></component-transfer-field>\n	<div id='contacts-list'></div>\n</div>";
class Contacts extends ChildComponent {
  constructor() {
    super();
    this.store = Store.getInstance().state;
    this.userService = new UserService();
  }
  fetchData() {
    this.userService.getAll(null, (data) => {
      if (!data) return;
      this.element.querySelector(LOADER_SELECTOR).remove();
      for (const user of data) {
        $R(this.element).find("#contacts-list").append(
          new UserItem(user, true, () => {
            $R(TRANSFER_FIELD_SELECTOR).value(
              formatCardNumberWithDashes(user.card.number)
            );
          }).render()
        );
      }
      $R(this.element).find("#contacts-list").findAll("button").forEach((contactElement) => {
        contactElement.addClass("fade-in");
      });
    });
  }
  render() {
    this.element = renderService.htmlToElement(
      template$7,
      [TransferField, new Heading("Transfer money")],
      styles$6
    );
    if (this.store.user) {
      $R(this.element).find("#contacts-list").html(new Loader().render().outerHTML);
      setTimeout(() => this.fetchData(), 500);
    }
    return this.element;
  }
}
const template$6 = "<div class='home'>\r\n	<div>\r\n		<component-card-info></component-card-info>\r\n		<component-transactions></component-transactions>\r\n	</div>\r\n	<div>\r\n		<component-statistics></component-statistics>\r\n		<component-actions></component-actions>\r\n		<component-contacts></component-contacts>\r\n	</div>\r\n</div>\r\n";
class StatisticService {
  constructor() {
    __privateAdd(this, _BASE_URL4, "/statistics");
  }
  main(onSuccess) {
    return obQuery({
      path: __privateGet(this, _BASE_URL4),
      onSuccess
    });
  }
}
_BASE_URL4 = new WeakMap();
const statistics = "_statistics_1t05k_1";
const styles$5 = {
  statistics
};
const draw = "_draw_1pw7d_1";
const fadeIn = "_fadeIn_1pw7d_1";
const styles$4 = {
  "donut-chart": "_donut-chart_1pw7d_1",
  draw,
  fadeIn
};
const template$5 = "<div class='donut-chart'>\n\n</div>";
class DonutChart extends ChildComponent {
  /**
   * Create a new DonutChart instance.
   * @param {string|HTMLElement} container - The container element (either a selector or HTMLElement) where the chart will be appended.
   * @param {object[]} data - An array of data objects to represent each slice of the donut chart.
   * @param {number} data[].value - The value of the slice.
   * @param {string} data[].color - The color of the slice.
   * @param {number} [options.size=250] - The diameter of the donut chart.
   * @param {number} [options.donutWidth=50] - The width of the donut ring.
   */
  constructor(data, options = {
    size: 250,
    donutWidth: 50
  }) {
    super();
    __privateAdd(this, _DonutChart_instances);
    __publicField(this, "gap", 15);
    this.data = data;
    this.size = options.size;
    this.donutWidth = options.donutWidth;
  }
  /**
   * Render Pie chart
   */
  render() {
    this.element = renderService.htmlToElement(template$5, [], styles$4);
    $R(this.element).append(__privateMethod(this, _DonutChart_instances, getSvg_fn).call(this));
    return this.element;
  }
}
_DonutChart_instances = new WeakSet();
/**
 * Calculate the total value of all slices.
 * @returns {number} The total value.
 */
// calculates the total sum of segment values.
calculateTotalValue_fn = function() {
  return this.data.reduce((acc, slice) => acc + slice.value, 0);
};
/**
 * Convert polar coordinates to Cartesian coordinates.
 * @param {number} percentage - The percentage of the circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number[]} The Cartesian coordinates [x, y].
 */
// преобразует полярные координаты в декартовы координаты.
//converts polar coordinates to Cartesian coordinates.
polarToCartesian_fn = function(percentage, radius) {
  const angleInDegrees = percentage * 3.6 - 90;
  const angleInRadians = angleInDegrees * Math.PI / 180;
  const x = radius * Math.cos(angleInRadians);
  const y = radius * Math.sin(angleInRadians);
  return [x, y];
};
/**
 * Create an SVG element and set its attributes.
 * @returns {SVGElement} The created SVG element.
 */
createSvgElement_fn = function() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", this.size);
  svg.setAttribute("height", this.size);
  svg.setAttribute(
    "viewBox",
    `-5 -5 ${this.size + this.gap} ${this.size + this.gap}`
  );
  return svg;
};
/**
 * Create an SVG group element and set its attributes.
 * @returns {SVGElement} The created SVG group element.
 */
createSvgGroupElement_fn = function() {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute(
    "transform",
    `translate(${this.size / 2 + this.gap / 4}, ${this.size / 2 + this.gap / 4})`
  );
  return g;
};
createPathElement_fn = function(slice, pathData) {
  if (!pathData || pathData.includes("NaN")) return;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", slice.color);
  path.setAttribute("stroke-width", this.donutWidth);
  return path;
};
// создает элементы пути SVG для каждого сегмента диаграммы.
//Creates SVG path elements for each diagram segment.
createSvgPathElements_fn = function(g) {
  const totalValue = __privateMethod(this, _DonutChart_instances, calculateTotalValue_fn).call(this), scale = 0.8, newSize = this.size * scale, radius = newSize / 2;
  let accumulatedPercentage = 0;
  this.data.forEach((slice) => {
    const percentage = slice.value / totalValue * 100;
    const [startX, startY] = __privateMethod(this, _DonutChart_instances, polarToCartesian_fn).call(this, accumulatedPercentage, radius);
    accumulatedPercentage += percentage;
    const [endX, endY] = __privateMethod(this, _DonutChart_instances, polarToCartesian_fn).call(this, accumulatedPercentage, radius);
    const largeArcFlag = percentage > 50 ? 1 : 0;
    const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
    const path = __privateMethod(this, _DonutChart_instances, createPathElement_fn).call(this, slice, pathData);
    path.classList.add("rotate");
    g.appendChild(path);
  });
};
/**
 * Generates an SVG element representing the donut chart.
 * @returns {SVGElement} The SVG element containing the donut chart.
 */
getSvg_fn = function() {
  const svg = __privateMethod(this, _DonutChart_instances, createSvgElement_fn).call(this);
  const g = __privateMethod(this, _DonutChart_instances, createSvgGroupElement_fn).call(this);
  __privateMethod(this, _DonutChart_instances, createSvgPathElements_fn).call(this, g);
  svg.appendChild(g);
  return svg;
};
const styles$3 = {
  "circle-chart": "_circle-chart_1k8h1_1"
};
const template$4 = "<div class='circle-chart'>\n	<component-donut-chart></component-donut-chart>\n</div>";
class CircleChart extends ChildComponent {
  constructor(incomePercent, expensePercent) {
    super();
    this.incomePercent = incomePercent;
    this.expensePercent = expensePercent;
  }
  render() {
    this.element = renderService.htmlToElement(
      template$4,
      [
        new DonutChart([
          { value: this.incomePercent, color: "#08f0c8" },
          { value: this.expensePercent, color: "#917cff" }
        ])
      ],
      styles$3
    );
    return this.element;
  }
}
const green = "_green_1slco_25";
const purple = "_purple_1slco_31";
const styles$2 = {
  "statistic-item": "_statistic-item_1slco_1",
  green,
  purple
};
const template$3 = "<div class='statistic-item'>\n	<span id='statistic-label'></span>\n	<span id='statistic-value'></span>\n</div>";
class StatisticsItem extends ChildComponent {
  /**
   * Constructs a StatisticItem instance.
   *
   * @param {string} label - The label to be displayed in the statistic item.
   * @param {string|number} value - The value to be displayed in the statistic item.
   * @param {('purple'|'green')} variant - The variant that determines the appearance of the statistic item. Allowed values: 'purple' or 'green'.
   */
  constructor(label, value, variant) {
    super();
    if (!label || !value || !variant) {
      throw new Error("Label, value and variant (purple/green) required!");
    }
    this.label = label;
    this.value = value;
    this.variant = variant;
  }
  render() {
    this.element = renderService.htmlToElement(template$3, [], styles$2);
    $R(this.element).addClass(styles$2[this.variant]).addClass("fade-in");
    $R(this.element).find("#statistic-label").text(this.label);
    $R(this.element).find("#statistic-value").text(this.value);
    return this.element;
  }
}
const template$2 = "<div class='statistics'>\n	<component-heading></component-heading>\n\n	<div id='circle-chart'></div>\n	<div id='statistics-items'>\n\n	</div>\n</div>";
class Statistics extends ChildComponent {
  constructor() {
    super();
    __privateAdd(this, _Statistics_instances);
    this.store = Store.getInstance().state;
    this.statisticService = new StatisticService();
    this.element = renderService.htmlToElement(
      template$2,
      [new Heading("Statistics")],
      styles$5
    );
    __privateMethod(this, _Statistics_instances, addListeners_fn2).call(this);
  }
  destroy() {
    __privateMethod(this, _Statistics_instances, removeListeners_fn2).call(this);
  }
  renderChart(income2, expense) {
    const total = income2 + expense;
    let incomePercent = income2 * 100 / total;
    let expensePercent = 100 - incomePercent;
    if (income2 && !expense) {
      incomePercent = 100;
      expensePercent = 0.1;
    }
    if (!income2 && expense) {
      incomePercent = 0.1;
      expensePercent = 100;
    }
    return new CircleChart(incomePercent, expensePercent).render();
  }
  fetchData() {
    this.statisticService.main((data) => {
      if (!data) return;
      const loaderElement = this.element.querySelector(LOADER_SELECTOR);
      if (loaderElement) loaderElement.remove();
      const statisticsItemsElement = $R(this.element).find("#statistics-items");
      statisticsItemsElement.text("");
      const circleChartElement = $R(this.element).find("#circle-chart");
      circleChartElement.text("");
      statisticsItemsElement.append(
        new StatisticsItem(
          "Income:",
          formatToCurrency(data[0].value),
          "green"
        ).render()
      ).append(
        new StatisticsItem(
          "Expense:",
          formatToCurrency(data[1].value),
          "purple"
        ).render()
      );
      circleChartElement.append(this.renderChart(data[0].value, data[1].value));
    });
  }
  render() {
    if (this.store.user) {
      $R(this.element).append(new Loader().render());
      setTimeout(() => this.fetchData(), 500);
    }
    return this.element;
  }
}
_Statistics_instances = new WeakSet();
addListeners_fn2 = function() {
  document.addEventListener(
    TRANSACTION_COMPLETED,
    __privateMethod(this, _Statistics_instances, onTransactionCompleted_fn).bind(this)
  );
};
removeListeners_fn2 = function() {
  document.removeEventListener(
    TRANSACTION_COMPLETED,
    __privateMethod(this, _Statistics_instances, onTransactionCompleted_fn).bind(this)
  );
};
onTransactionCompleted_fn = function() {
  this.fetchData();
};
class TransactionService {
  constructor() {
    __privateAdd(this, _BASE_URL5, "/transactions");
  }
  getAll(onSuccess) {
    return obQuery({
      path: __privateGet(this, _BASE_URL5) + `?${new URLSearchParams({ orderBy: "desc" })}`,
      onSuccess
    });
  }
}
_BASE_URL5 = new WeakMap();
const transactions = "_transactions_vmmkx_1";
const styles$1 = {
  transactions
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
const slideIn = "_slideIn_z2q3q_1";
const income = "_income_z2q3q_21";
const styles = {
  "transaction-item": "_transaction-item_z2q3q_1",
  slideIn,
  income
};
const template$1 = "<div class='transaction-item'>\r\n	<div>\r\n		<div>\r\n			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' id='transaction-icon'>\r\n\r\n				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />\r\n\r\n				<path stroke-linecap='round' stroke-linejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />\r\n\r\n			</svg>\r\n		</div>\r\n		<span id='transaction-name'></span>\r\n	</div>\r\n\r\n	<div>\r\n		<div>\r\n			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>\r\n				<path stroke-linecap='round' stroke-linejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' />\r\n			</svg>\r\n\r\n		</div>\r\n		<span id='transaction-date'></span>\r\n	</div>\r\n\r\n	<div>\r\n		<span id='transaction-amount'>\r\n		</span>\r\n	</div>\r\n</div>";
class TransactionItem extends ChildComponent {
  constructor(transaction) {
    super();
    this.transaction = transaction;
  }
  render() {
    this.element = renderService.htmlToElement(template$1, [], styles);
    const isIncome = this.transaction.type === "TOP_UP";
    const name = isIncome ? "Income" : "Expense";
    if (isIncome) {
      $R(this.element).addClass(styles.income);
    }
    $R(this.element).find("#transaction-name").text(name);
    $R(this.element).find("#transaction-date").text(formatDate(this.transaction.createdAt));
    $R(this.element).find("#transaction-amount").text(formatToCurrency(this.transaction.amount));
    return this.element;
  }
}
const template = "<section class='transactions'>\n	<component-heading></component-heading>\n	<div id='transactions-list'></div>\n</section>";
class Transactions extends ChildComponent {
  constructor() {
    super();
    __privateAdd(this, _Transactions_instances);
    __privateAdd(this, _onTransactionCompleted, () => {
      this.fetchData();
    });
    this.store = Store.getInstance().state;
    this.transactionService = new TransactionService();
    this.element = renderService.htmlToElement(
      template,
      [new Heading("Recent transactions")],
      styles$1
    );
    __privateMethod(this, _Transactions_instances, addListeners_fn3).call(this);
  }
  destroy() {
    __privateMethod(this, _Transactions_instances, removeListeners_fn3).call(this);
  }
  fetchData() {
    this.transactionService.getAll((data) => {
      if (!data) return;
      const loaderElement = this.element.querySelector(LOADER_SELECTOR);
      if (loaderElement) loaderElement.remove();
      const transactionsList = $R(this.element).find("#transactions-list");
      transactionsList.text("");
      if (data.length) {
        for (const transaction of data.transactions) {
          transactionsList.append(new TransactionItem(transaction).render());
        }
      } else {
        transactionsList.text("Transactions not found!");
      }
    });
  }
  render() {
    if (this.store.user) {
      $R(this.element).append(new Loader().render());
      setTimeout(() => this.fetchData(), 500);
    }
    return this.element;
  }
}
_Transactions_instances = new WeakSet();
addListeners_fn3 = function() {
  document.addEventListener(
    TRANSACTION_COMPLETED,
    __privateGet(this, _onTransactionCompleted)
  );
};
removeListeners_fn3 = function() {
  document.removeEventListener(
    TRANSACTION_COMPLETED,
    __privateGet(this, _onTransactionCompleted)
  );
};
_onTransactionCompleted = new WeakMap();
class Home extends BaseScreen {
  constructor() {
    super({ title: "Home" });
    this.store = Store.getInstance();
    this.store.addObserver(this);
    this.components = {
      cardInfo: null,
      transactions: null,
      statistics: null
    };
  }
  createOrUpdateComponent(component, componentName) {
    if (this.components[componentName]) {
      this.components[componentName].destroy();
    }
    this.components[componentName] = new component();
    return this.components[componentName];
  }
  update() {
    this.user = this.store.state.user;
    if (!this.user) {
      $R(this.element).html(new AuthRequiredMessage().render().outerHTML);
    }
  }
  render() {
    const componentsToRender = [
      this.createOrUpdateComponent(CardInfo, "cardInfo"),
      this.createOrUpdateComponent(Transactions, "transactions"),
      this.createOrUpdateComponent(Statistics, "statistics"),
      Actions,
      Contacts
    ];
    this.element = renderService.htmlToElement(
      template$6,
      componentsToRender,
      styles$a
    );
    this.update();
    return this.element;
  }
}
const ROUTES = [
  {
    path: "./",
    component: Home
  },
  {
    path: "./auth",
    component: Auth
  },
  {
    path: "./about",
    component: About
  }
];
class Router {
  constructor() {
    __privateAdd(this, _Router_instances);
    __privateAdd(this, _routes);
    __privateAdd(this, _currentRoute);
    __privateAdd(this, _layout, null);
    __privateSet(this, _routes, ROUTES);
    __privateSet(this, _currentRoute, null);
    __privateMethod(this, _Router_instances, handleRouteChange_fn).call(this);
    __privateMethod(this, _Router_instances, handleLinks_fn).call(this);
    window.addEventListener("popstate", () => {
      __privateMethod(this, _Router_instances, handleRouteChange_fn).call(this);
    });
  }
  getCurrentPath() {
    const base = "/bank-js-intensive/";
    const pathname = window.location.pathname;
    return pathname.replace(base, "./");
  }
  navigate(path) {
    if (path !== this.getCurrentPath()) {
      window.history.pushState({}, "", path);
      __privateMethod(this, _Router_instances, handleRouteChange_fn).call(this);
    }
  }
}
_routes = new WeakMap();
_currentRoute = new WeakMap();
_layout = new WeakMap();
_Router_instances = new WeakSet();
handleLinks_fn = function() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("a");
    if (target) {
      event.preventDefault();
      this.navigate(target.href);
    }
  });
};
handleRouteChange_fn = function() {
  const path = this.getCurrentPath();
  let route = __privateGet(this, _routes).find((route2) => route2.path === path);
  if (!route) {
    route = {
      component: NotFound
    };
  }
  __privateSet(this, _currentRoute, route);
  __privateMethod(this, _Router_instances, render_fn).call(this);
};
render_fn = function() {
  const component = new (__privateGet(this, _currentRoute)).component().render();
  if (!__privateGet(this, _layout)) {
    __privateSet(this, _layout, new Layout({
      router: this,
      children: component
    }).render());
    $R("#app").append(__privateGet(this, _layout));
  } else {
    $R("#content").html("").append(component);
  }
};
new Router();
