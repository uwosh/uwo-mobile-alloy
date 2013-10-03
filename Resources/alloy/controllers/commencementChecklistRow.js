function Controller() {
    function toggleStatus() {
        var todo = todos.get(id);
        todo.set({
            done: todo.get("done") ? 0 : 1,
            date_completed: moment().unix()
        }).save();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "commencementChecklistRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.check = Ti.UI.createImageView({
        image: "/tick_gray_64.png",
        left: 0,
        height: "50dp",
        width: "50dp",
        id: "check"
    });
    $.__views.row.add($.__views.check);
    toggleStatus ? $.__views.check.addEventListener("click", toggleStatus) : __defers["$.__views.check!click!toggleStatus"] = true;
    $.__views.task = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: "18dp"
        },
        left: "50dp",
        right: "50dp",
        height: Ti.UI.SIZE,
        id: "task",
        text: "undefined" != typeof $model.__transform["item"] ? $model.__transform["item"] : $model.get("item")
    });
    $.__views.row.add($.__views.task);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var todos = Alloy.Collections.todo;
    var id;
    if ($model) {
        id = $model.id;
        if ($model.get("done")) {
            $.row.backgroundColor = "#eee";
            $.check.backgroundColor = "#eee";
            $.task.color = "#ccc";
            $.check.image = "/tick_64.png";
        } else {
            $.row.backgroundColor = "#fff";
            $.check.backgroundColor = "#fff";
            $.task.color = "#000";
            $.check.image = "/tick_gray_64.png";
        }
    }
    __defers["$.__views.check!click!toggleStatus"] && $.__views.check.addEventListener("click", toggleStatus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;