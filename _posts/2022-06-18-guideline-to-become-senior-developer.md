---
title: Guideline to Become Senior Developer
date: 2022-06-18 00:00 +0000
description: Senior Developer Coding Guideline
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - productivity
---

> Have you realized writing code that is not **production ready** is not good practice? Have you seen code which violates the **DRY** principle? Did you notice **specs/unit-test** in your code base which is missing important specs and has tests for the things which are not important with respect to a given **PBI** or task required ?

In this article, I will list out all the best practices that a developer should follow to become a responsible senior developer.

## What is a modeling session for developers?

In the modeling session developers discuss the business user acceptance requirements. They come up with an optimal approach to solve the business problems by following the clean code principle and other policies and patterns that your company is already following. Next they divide the solutions into small tasks, distribute among them and go to their respective work stations and write the code, write the specs/unit-test and deploy to QA.

## What do Architects expect from Senior Developers?

- If you are given a bug you should be able to fix it `independently`.
- You should be able to model `independently` and come up with an approach that meets all the requirements of the given task or `PBI`.
- When you show your approach to the architect it should full-fill all the modeling check-list.
- If you are given a task you should be able to finish `independently`.
- You should discuss your approach with architects before you start writing code.
- Keep showing your work frequently to get feedback and prepare to change your approach as you go. Make sure you develop with `TDD`.
- If the architect is not available or in meetings then keep posting your screenshots in the `AOF` group. Architects will review as they get time. You will not wait to get feedback and continue your work since you already discussed the approach. However, be prepared to change your approach or code as per the Architect Feedback.

I would recommend creating a chat group called Architecture Oversight Feedback group where developers post their source code pictures as they develop if architects are not available to check your source code.

## How to improve on modeling and become a responsible developer?

You should learn fundamental building blocks of your Angular project. Then we will see what the check-list you will follow while doing modeling and showing your approach to the architect to avoid mistakes. Finally, you will learn what you should unit-test.

Let's understand our angular project architecture.

## Angular Project Architecture

In your angular project you will have the following things:

- **Model** is a `data-structure` that has public properties. Do not put any logic keep this as `datastructure` class.
- **Store** is the home for the model and it has all the queries made on the model.  
   Example: `ClassificationSetStore` has a single item as the current classification set. If the classification set has levels which are required or is a query in the store,
- **Components** have 2 types: parent, child. All use cases are in the parent component. The rendering concerns are in the child component.
- **ApiService** should call an angular HTTP client. It should not do any logic.
- **Service** has business logic, makes HTTP calls using `ApiService` and updates the model if required. Example: use `apiService` to post HTTP to create items. On success get the new id, version from the output and update the model with the new version or id. If you are following NgRX then your effect will make HTTP calls and reducer will update store on action.

Note: This structure may differ as per your project architecture.

## While Modeling What is my Check List

You have been assigned a `PBI` or task where you have to come up with a solution and also write production code. Then it has 2 steps. First step is to model your solution and find the approach. Once you know the approach then do coding.

### Overall Modeling Strategy

Read below before you are solving any problem for a given task or story.

1. Follow the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), check if you are duplicating any logic if yes then justify. Try to avoid it. If you can not justify and you have to put a duplicate then talk to the architect.

_Don’t avoid **DRY** because it may cause many deep hidden design/technical issues._

2. Follow [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), check if the logic is spread across many places already or in your design then put them all in one place. And manage the related concerns in one place.
3. Following the [SOLID principle](https://en.wikipedia.org/wiki/SOLID) strictly, this is mandatory.

### Designing Angular Components

Read below before you are going to decide what component I need to create.

1. **Models** can be directly updated from HTML since we are doing 2 way-data binding and template form. Model gets updated directly from HTML.
2. Models can’t be updated directly from component methods. You must send a message to update the model. Write a service to listen to messages and update models.
3. **Queries** for models are in the store file. Components should not write it’s own logic to query the model for any property.
4. **Component** HTML must be divided into **parent and child**. Child will get input from the parent using the @Input property defined in the Child component. Parents will receive a notification when the child will emit using the @Output `EventEmitter` property. Example: Classification Set has levels. The `LevelsComponent` is a child component that gets the levels to display from the `ClassificationSetComponent`. In order to delete a level, `LevelsComponent` will emit a delete with the level Id. Then `ClassificationSetComponent` will implement the `deleteLevel` method invoked on delete.
5. The **Child Component** should only get input and emit the output event. It should not have any logic to decide whether to show a button or not. This logic should be in parent.
6. If you have parent and child components, make sure all use-case implementations are in the **Parent component** only. So in the previous example `ClassificationSetComponent` will have add level, delete level, create classification set etc.

#### What is the Smart Component?

Most of the Parent components are modeled as Smart components. Below are the characteristics of Smart Components:

- It should have all `CRUD` use cases for that component.
- It can send command to update a model which service can listen and call api to update model.
- It can make a query to store and create data structures with the decision whether to show a delete button in the child component or not.
- It can query stores to get models.
- It should pass all the data required for its child component.
- It should implement the @Output events coming from the child component.

#### What is the Presentation Component?

Child component which is only responsible to render data is called `Presentation` or `Dumb` Component. Below are the characteristics of Smart Components:

- It should take input data and emit events using angular @Output.
- It decides how to render a component. Should I use a bootstrap table or angular material table or `jQuery` table etc. What would be the color of the text etc.
- It will emit the output anytime it has to change the model.

Once your design or modeling is done please read the checklist again and make sure your discovered approach is not violating any of these points. If you need help bring your architects in the room and ask questions.

## Example: Design Manage Employee Angular Components 

**Requirements:**

Design Angular components. You should be able to add Employee, show the added employee in the table and delete employees.

**Solutions:**

`EmployeeList` Component is Dumb it takes list of employees render in table. It emits a delete message when the user clicks on the delete button.

The `ManageEmployee` Component will read the employee list from store and it will implement delete use-case where it sends a message to delete employees.

## Follow TDD strictly

Write the test first before you write production code. That is called TDD ( Test Driven Development ). In code walkthrough ceremony, show you spec first before showing your code. If you write bad spec, it may cause build failure and slow down you and other people work as well.

Do not use `new Date()` in your spec models. Rather use predictive time or create `IProvideDate` service and use it in your code base to provide datetime value. This way you can easily mock your date time.

Mock any side-effects that can happen in your spec. Below are some list:

- Date time
- Set Timeout
- Web API calls
- Alert or Confirm

## While Writing Specs/Unit-Tests

You need to write specs for the following things:

1. **Service**
2. **Component**
3. **Api Service**
4. **Store**

### Testing Angular Service

You must assert the following conditions:

- It is calling `apiService` with the correct parameters.
- It updates the model correctly ( if `apiService` output is a new Id or version then check if the model is updated with the same.)

### Testing Angular Components

You must test your component when it is created without model data.  Another scenario with model data.

#### Testing Smart Components

**With empty Model:**

- It is sending the correct command with required data.
- It should create correct data structure to pass child component

**With populated model retrieved from server test below:**

- It should send correct commands by checking data coming from the server.

#### Testing Presentation Component

- Check correct outputs are emitted
- Check rendered HTML ( use JEST snapshot feature ) Presentation component is responsible for rendering the exact same HTML every-time you give the same input data. So you should snap-shot the HTML rendered for a given input in your specs and always assert if that is not changed.

### Testing Store

- Test any complex query if it has one.

### Testing Api Service

- Make sure you pass correct parameters to the angular `HttpClient` service.

## Practical Modeling Example 1

**Requirement:**

When approval is given, then hide the save button and make all widgets read only.

**Solution Team came up with was:**

IT Ops had an Item Editor and we had a Save Widget button over there. We wanted to hide the button when

Approval is given. We added the logic to subscribe to the Approval Received event there to hide the button.

In Every widget we also added the same logic to subscribe to the Approval Received event and apply read-only lock to all them.

**Check what violation we are doing in the above example:**

So in the above example we are violating both the DRY and Separation of Concerns principle.

1. Subscribe Approval Received and lock widget logic is in each and every widget, which is a violation of the DRY principle. The `WidgetStack` component can only subscribe to the `ApprovalReceived` event and pass an input value to all the widgets to lock them.
2. We also violated separation of concern IT Ops is not supposed to listen to business events and change the button that belongs to widget service. Better solution is to move the button inside the widget stack and let the widget stack hide and show the button.

## Practical Modeling Example 2

**Requirement:**

Create a Classification Set which will have definitions and levels. Users can create classification sets, add level, delete level, and the delete button should be shown to the user defined levels only.

**Solution Team came up with was:**

Created one component which does

- Render the definition
- Implement create definition
- Updating the model in component for every time different type is selected, sections have to change
- Render all system defined levels
- Implement delete levels

**Check what violation we are doing in the above example:**

One component is doing both rendering and implementing logic to update the model.

Create a Classification Set as a smart component.

- Implement create definition ( and send message to create so not modify model here)
- Implement delete level ( and send message to delete level so not modify model here)
- Create a data structure with the `boolean` value to know which level can be deleted based on the type of the level. ( user defined level can only be deleted )

Create Classification Levels as a presentation component.

- Get the list of levels to display with the `boolean` to show the delete button or not.
- Render the list in angular material
- On click of delete output the delete with the level index or level Id.

Create Classification Definition as a presentation component.

- Get the data to display
- Add template form in `html` with validations
- Output create when the user wants to create a new definition

## Guideline for assigning Hours to Sprint Story

If you are following 2 week sprint. Then I would put below hours to the points. Sprint stories could be assigned points. We can assign 1,2 or 3 point. Here is the map of point to hours.

- **1 point** story-> **18** hours total. (Create 1 high level task of 18 hours)
- **2 point** story-> **36** hours total. (Create 2 high level tasks each 18 hours)
- **3 point** story-> **54** hours total. (Create 3 high level tasks each 18 hours)

Note: this hours can change based on your team velocity or capability of development.

## How much point stories total I should take in sprint?

Mostly, this depends on velocity of your team. Run your sprint couple of weeks and check how much your team is able to deliver. Based on that you can decide how much you can take in sprint.

If you are doing 2 week sprint. Then don't take 3 point stories more than once.

## How are you implementing Features in sprint.

Take business requirement as feature. Create Feature in Team foundation or any tool you are using. Then within the feature you can start creating stories. Story can be pure technical if you want to setup some framework or environment etc. Story could be tangible where business user can see something. However, keep your feature very thin focused on one thing.

## Guideline to create Stories for Fullstack (Server work and Client work) feature.

I would recommend not doing Fullstack story in your sprint. If you are 2 week sprint.
However, if you have client heavy work and small work in server which can be doable within sprint. And you can deliver to QA by next Tuesday of next week ( ending week of sprint ). Otherwise, please don't take Fullstack stories. Split your stories in 2 part. One story is to build client side. One story is to build server side and integrate server to UI. Some time if server side story is large I would say split 2nd story further and create over all 3 stories.

1- **Create Client side story**: Developer build UI and deliver something working with in-memory api in angular framework. QA can test UI with in-memory api. Check the [client side guideline above](#guideline-to-create-tasks-for-client-story).

2- **Create Server side story**: Developer build server side piece, if it is web api. Then Developer can share web api URL and educate QA to test via URL. You can use postman config to setup authentication authorization to test use case via Web api. QA can test by using web api and confirm if Database is persisting data.

3- **Create story for integrating server to client**: Development team make sure they integrate both client and server. QA is testing entire end to end story.

Each story can be 1, 2 or 3 pointer based on the effort required to develop them.

## Guideline to create Tasks for a pure Client side Story

Below are the client side tasks assuming you are working on Angular framework.

1- Task to work on `Components`
2- Task to work on `Services & Composition (if required)`  
3- Task to work on `DATA + In-Memory Api`

## Conclusion

Let me know if you think any further improvement we can do to make yourself a better responsible senior developer.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
