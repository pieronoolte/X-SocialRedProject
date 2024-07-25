// app/javascript/controllers/popovers_controller.js

import { Controller } from "@hotwired/stimulus";
import { Popover } from "bootstrap";

// Connects to data-controller="popovers"
export default class extends Controller {
  connect() {
    this.initializePopovers();
  }

  initializePopovers() {
    var popoverTriggerList = [].slice.call(this.element.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl);
    });
  }
}

// Listen for Turbo Stream events to reinitialize popovers
document.addEventListener("turbo:frame-load", function(event) {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl);
  });
});
