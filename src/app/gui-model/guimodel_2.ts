export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Tims Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						 {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
						{
                            "id":   "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },						
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "form": "ActivityForm",
                            "width": 2
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2,
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
				},
				{
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "ActivityName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "date",
                            "type": "date",
                            "name": "Date",
                            "width": 2,
                        },
						{
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/Location",
                            "form": "LocationForm",
                            "width": 2
                        },	
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
				},
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "AddFriendForm",
                    "title": "Friend",
                    "url": "/activity/:activityKey/friend",
                    "formFieldList": [
                        {
                            "id":   "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "url": "/friend",
                            "defaultKey": "friendKey",
                            "readonly": true,
                            "form": "FriendForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "EditFriendForm",
                    "title": "Friend",
                    "url": "/friend/:friendKey/",
                    "formFieldList": [
                        {
                            "id":   "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "url": "/friend/:friendKey/",
                            "defaultKey": "friendKey",
                            //"readonly": true,
                            "form": "FriendForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "EditActivityForm",
                    "title": "Activity",
                    "url": "/activity/:activityKey/",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity/:activityKey/",
                            "defaultKey": "activityKey",
                            //"readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-map-marker-alt",
                            "color": "yellow",
                            "page": "locationspage",
                        },
						{
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-users",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
						{
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-history",
                            "color": "orange",
                            "page": "activitiespage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "blue",
							"width": 2,
                            "form": {
                                "form": "FriendForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
							"search": true,
                            "url": "/friend",
							"page": "/:friendKey"
                        },
                    ]
                },
				{
                    "id": "/:friendKey",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-history",
                            "color": "orange",
							"width": 2,
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
						{
                            "type": "newButton",
                            "name": "EditUser",
                            "icon": "fa-user",
                            "color": "blue",
							"width": 2,
                            "form": {
                                "form": "EditFriendForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-history",
                            "color": "orange",
							"search": true,
                            "url": "/friend/:friendKey/activity",
							"form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-map-marker-alt",
                            "color": "yellow",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-home",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        
                    ]
                },
				{
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-users",
                            "color": "wisteria",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-users",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                    ]
                },
				{
                    "id": "activitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-history",
                            "color": "orange",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-history",
                            "color": "orange",
                            "search": true,
                            "url": "/activity",
                            "page": "/:activityKey"
                        
                        },
                    ]
                },
				{
                    "id": "/:activityKey",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "AddFriend",
                            "icon": "fa-user",
                            "color": "blue",
							"width": 2,
                            "form": {
                                "form": "AddFriendForm"
                            }
                        },
						{
                            "type": "newButton",
                            "name": "EditActivity",
                            "icon": "fa-history",
                            "color": "orange",
							"width": 2,
                            "form": {
                                "form": "EditActivityForm"
                            }
                        },
						{
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
							"search": true,
                            "url": "/activity/:activityKey/friend",
							"form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
