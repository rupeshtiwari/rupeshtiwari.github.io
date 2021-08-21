---
title: Guideline to Become Responsible Senior Developer
date: 2022-06-18 00:00 +0000
description: Senior Developer Coding Guideline
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
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

## What do I mean by Responsible developer?

A responsible developer has following attributes:

- While working if you learned something, you document them and share with your collogues in code walk-through ceremony.
- While you are working on project and you find some code refectory that you could do to improve code base quality. You will do that and inform your senior about that.
- Whenever, your senior explains you something important related to project or any best-practice. You should note that and next time when you participate in meeting make sure you recollect the previous learning and apply it in future discussions. Example: In your angular project, If you have been told that you should never mutate `model` state in `component` class. You must ask question why? Next you should note this point and remember. Next time during modeling session, if someone propose solution where they are trying to mutate model in component you should bring this point and correct them.

## What is a modeling session for developers?

After sprint grooming and planning is done. Developers collaborate together and discuss high level solution/approach to the given user story. This session is called `modeling session`. In the modeling session developers discuss the given Business User Acceptance Requirements. They come up with an optimal approach to solve the problems by following the `clean code principle`, `best practices`, `their industry practices and patterns`, design philosophy like `DDD (Domain Driven Design), SOA (Service Oriented Architecture)` etc. Next they divide the solutions into small tasks, distribute among them and go to their respective work stations and write the `code`, write the `specs/unit-test` and `deploy` to QA.

## What do Architects expect from Senior Developers?

- If you are given a bug you should be able to fix it `independently`.
- You should be able to model `independently` and come up with an approach that meets all the requirements of the given task or `PBI`.
- When you show your approach to the architect it should full-fill all the modeling check-list.
- If you are given a task you should be able to finish `independently`.
- You should discuss your approach with architects before you start writing code.
- Keep showing your work frequently to get feedback and prepare to change your approach as you go. Make sure you develop with `TDD`.
- If the architect is not available or in meetings then keep posting your screenshots in the `AOF` group. Architects will review as they get time. You will not wait to get feedback and continue your work since you already discussed the approach. However, be prepared to change your approach or code as per the Architect Feedback.

I would recommend creating a chat group called Architecture Oversight Feedback group where developers post their source code pictures as they develop if architects are not available to check your source code.

## How to improve on modeling and solve problems?

First thing is You should learn fundamental building blocks of `your project` that you have been assigned. Then I will explain you what are the check-list you can follow while doing modeling. I will also show you my approach that I follow to solve problems to avoid architectural mistakes. Finally, you will learn in your project what are the files you should unit-test them.

Let's understand our angular project architecture.

## Angular Project Architecture

According to me, In a typical angular project you will have the following things:

- **Model** is a `data-structure` that has public properties. Do not put any logic keep this as `datastructure` class.
- **Store** is the home for the model and it has all the queries made on the model.  
   Example: `ClassificationSetStore` has a single item as the current classification set. If the classification set has levels which are required or is a query in the store,
- **Components** have 2 types: parent, child. All use cases are in the parent component. The rendering concerns are in the child component.
- **ApiService** should call an angular HTTP client. It should not do any logic.
- **Service** has business logic, makes HTTP calls using `ApiService` and updates the model if required. Example: use `apiService` to post HTTP to create items. On success get the new id, version from the output and update the model with the new version or id. If you are following NgRX then your effect will make HTTP calls and reducer will update store on action.

![](https://i.imgur.com/6i2SxSG.png){: .full}

{: .notice--warning}
⚠️ Note: This project structure may differ as per your company's project architecture.

## While Modeling What guideline I should follow?

You have been assigned a `PBI` or task where you have to come up with a solution and also write production code. First step is to model your solution and find the approach. Discuss your approach with senior After that you can start coding.

### Overall Modeling Strategy

Read below before you are solving any problem for a given task or story.

1. Follow the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), check if you are duplicating any logic if yes then justify. Try to avoid it. If you can not justify and you have to put a duplicate then talk to the architect.
   _Don’t avoid **DRY** because it may cause many deep hidden design/technical issues._
2. Follow [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), check if the logic is spread across many places already or in your design then put them all in one place. And manage the related concerns in one place.
3. Following the [SOLID principle](https://en.wikipedia.org/wiki/SOLID) strictly, this is mandatory.
4. Be consistent, check existing design in your project most of the time you will be solving a problem which is already solved. Therefore, you should not waste time to re-invent the wheels. Just follow the same design and structure that you have in your project. It will save your and team time. This is most important principle to remember always be `consistent in your project`.

Later, I will give you some examples about `DRY` and `Separation of Concerns` principles.

### Use below guidelines while designing/solving Angular Problems

Read below before you are going to decide your solution in Angular project.

1. **Models** can be directly updated from HTML since we are doing 2 way-data binding and template form. Model gets updated directly from HTML.
2. Models can’t be updated directly from component methods. You must send a message to update the model. Write a service to listen to messages and update models.
3. **Queries** for models are in the store file. Components should not write it’s own logic to query the model for any property.
4. **Component** HTML must be divided into **parent and child**. Child will get input from the parent using the @Input property defined in the Child component. Parents will receive a notification when the child will emit using the @Output `EventEmitter` property. Example: Classification Set has levels. The `LevelsComponent` is a child component that gets the levels to display from the `ClassificationSetComponent`. In order to delete a level, `LevelsComponent` will emit a delete with the level Id. Then `ClassificationSetComponent` will implement the `deleteLevel` method invoked on delete.
5. The **Child Component** should only get input and emit the output event. It should not have any logic to decide whether to show a button or not. This logic should be in parent.
6. If you have parent and child components, make sure all use-case implementations are in the **Parent component** only. So in the previous example `ClassificationSetComponent` will have add level, delete level, create classification set etc.

### What is the Smart Component?

Most of the Parent components are modeled as Smart components. Below are the characteristics of Smart Components:

- It should have all `CRUD` use cases for that component.
- It can send command to update a model which service can listen and call api to update model.
- It can make a query to store and create data structures with the decision whether to show a delete button in the child component or not.
- It can query stores to get models.
- It should pass all the data required for its child component.
- It should implement the @Output events coming from the child component.

### What is the Presentation Component?

Child component which is only responsible to render data is called `Presentation` or `Dumb` Component. Below are the characteristics of Smart Components:

- It should take input data and emit events using angular @Output.
- It decides how to render a component. Should I use a bootstrap table or angular material table or `jQuery` table etc. What would be the color of the text etc.
- It will emit the output anytime it has to change the model.

Once your design or modeling is done please read the checklist again and make sure your discovered approach is not violating any of these points. If you need help bring your architects in the room and ask questions.

### Example: Model Manage Employee Angular Components 

**Requirements:**

Design Angular components. You should be able to add Employee, show the added employee in the table and delete employees.

**Solutions:**

`EmployeeList` Component is Dumb it takes list of employees render in table. It emits a delete message when the user clicks on the delete button.

The `ManageEmployee` Component will read the employee list from store and it will implement delete use-case where it sends a message to delete employees.

With above knowledge you should be good to solve any angular problems. Now if you started writing code. You must start writing unit test first, then write corresponding production code. That is what we call Test Driven Development TDD. Lets understand what are the files you should test and what best practice you should follow.

## Follow TDD (Test Driven Development) strictly

Write the test first before you write production code. That is called TDD ( Test Driven Development ). In code walkthrough ceremony, show you spec first before showing your code. If you write bad spec, it may cause build failure and slow down you and other people work as well.

Do not use `new Date()` in your spec models. Rather use predictive time or create `IProvideDate` service and use it in your code base to provide datetime value. This way you can easily mock your date time.

Mock any side-effects that can happen in your spec. Below are some list:

- Date time
- Set Timeout
- Web API calls
- Alert or Confirm

### While Writing Specs/Unit-Tests

You need to write specs for the following things:

1. **Service**
2. **Component**
3. **Api Service**
4. **Store**

### Testing Angular Service

Angular service is where I will write business logic and web api calls. So we must assert all the mutation done on model and any api call happened with correct payload and URL.

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

### Testing Models

Mostly you will try to keep your models `anemic` in client side. Rather write `service` and put business logic over there. So I would advise not to write any specs on models.

### Testing DateTime

If your model is use property with date time type. Then never-ever use `new Date()` to assign the value. Always create a dedicated service to provide you new Date. So that you can always mock that service while testing. You must make your date predictable every time so that It does not break in build machine.

Create a `SystemDateTimeProvider` class and use this class in your service to create model with date time.

```ts
import { Injectable } from '@angular/core';

export abstract class DateTimeProvider {
  abstract now(): number;
  abstract new(): Date;
}

@Injectable()
export class SystemDateTimeProvider extends DateTimeProvider {
  now(): number {
    return Date.now();
  }

  new(): Date {
    return new Date();
  }
}
```

In your spec you can now easily mock the `new()` method and return some constant date that will always remain same and never break in build machine or some other person machine.

## Modeling Examples

### Practical Modeling Example 1

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

### Practical Modeling Example 2

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
