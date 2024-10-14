/*global QUnit*/

sap.ui.define([
	"commnea/localization-ui-wf/controller/approval.controller"
], function (Controller) {
	"use strict";

	QUnit.module("approval Controller");

	QUnit.test("I should test the approval controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
