---
title: Dynamically Adding UserControls
date: 2011-03-18T00:20:51.000Z
published: true
comments: true
social-share: true
categories:
  - ASP.Net
  - C#
tags:
  - Dynamic UserControl
description: Dynamically Adding UserControls in Asp Net
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><span style="font-family: calibri; font-size: 1.2em;"><br />
From last 4 days, I have been struggling on how I should load the UserControl dynamically in my default page. I know in today’s world where .Net 4.0 came up, MVCis there and in future C# 5.0 is also coming and I am talking of same old UserControls that we used to talk in .Net 1.1 -2.0 era. Well I can’t do anything because in my project we have a lots of UserControls and they are not migrating the application from old legacy style to what we have dynamic rendering html using jQuery Ajax and other stuffs. </span></p>
<p>Anyway coming back to my problem how to load user control in a page dynamically? It has simple one line answer that we can put one placeholder and load our usercontrol inside the placeholder at runtime by this way we would be able to render the usercontrol in page dynamically.</p>
<pre> 
protected void Page_Load(object sender, EventArgs e)
{
UserControlusercontrol= this.LoadControl("ucmycontrol.ascx") as UserControl;
placeholder.Controls.Add(usercontrol);
}
</pre>
<p><span style="font-family: calibri; font-size: 1.2em;"><span style="font-family: calibri; font-size: 1.2em;"><br />
However, this is not as easy as I said now. Let’s go deeper and think on what are the problems that would arise by loading usercontrol by above fashion. There may be various issues however let me talk on 2 major issues listed below:<br />
1) ViewState would not be saved and retrieved.<br />
2) Any Custom Events or dynamically added control events would not fire</span></span></p>
<p>Now take one by one let’s take number one problem</p>
<p><span style="text-decoration: underline;">viewstate would not maintain</span><br />
What this mean exactly? Let’s understand it with a simple silly example. Say you have any label in your usercontrol and in page load if you have put your name on the label’s text property. Now, you do button click or by any way if you posted back your page then the label would no more be displaying your name after rendering the page. Think why? Isn’t it weird? :(</p>
<p>Normally, what happens is when you put some value inside the text property of the label. And if postbackhappens then the page viewstateused to save the unique ID and value of the label and before rendering the usercontrolit loads the viewstatedata by identifying the same label unique id. Therefore, you normally see your value again after postback as well.</p>
<p>As we know the HTTP protocol is stateless. Therefore, whatever is loaded in first time pageload, when the postbackoccurs then server would not aware of the previous status of the page controls and its value. Hence .Net framework has introduced viewstatein order to store the previous state of the page controls. So that it persists after postbackas well. Thanks to ViewState. Don’t take me wrongly if I would say thanks to viewstate. As I am not supporter of the viewstateas I know it causes many problems those are separate concern and separate topic of discussion. You might be heard about the concept of Leaky Abstraction. Sometimes I feel .net ViewState is also one of the example of Leaky Abstraction. Any ways lots of digression happened lets concentrate on our basic problem.</p>
<p>Then why in our dynamically loaded user control viewstate stuff is not loading? Well, In order to understand this first we need to understand the page life cycle events. Are you ready to discuss them …? I am sure you might be saying ok … go ahead … am I not hearing you? :)</p>
<p>Anyway jokes apart. There are basically many events those gets fired automatically by the .net framework while loading the page however we are more concern about 12 major events.</p>
<p>Those are:<br />
PreInit, Init, InitComplete, PreLoad, Load, Control events, LoadComplete, PreRender, PreRenderComplete, SaveStateComplete, Render, and Unload.</p>
<p>In the page life cycle events the tracking of viewstatechanges is turned on in between Init and InitCompleteevents. So in the initcompleteevent frameworks adds all the controls property id and value in the viewstatecollection so as to persist after postback. So in our case when we click on the button then the viewstatewould not find the usercontrolin init event because we are adding it in pageloadevent and that’s why it would fail to load the value of the label. So if we want to save our view state stuffs inside the usercontrolthen we have to add the usercontrolat oninitevent. So that we would make sure that viewstatebag is taking care of all the control properties inside the usercontrol.</p>
<p>So we have to make our code like below in order to make sure viewstate would work properly:</p>
<p>&nbsp;</p>
<pre> 
protected override void OnInit(EventArgs e)
{
UserControlusercontrol= this.LoadControl("ucmycontrol.ascx") as UserControl;
placeholder.Controls.Add(usercontrol);
base.OnInit(e);
}
</pre>
<p><span style="font-family: calibri; font-size: 1.2em;"><span style="font-family: calibri; font-size: 1.2em;"><br />
So above code would solve our first problem.</span></span></p>
<p>Let’s go to our second problem<br />
<span style="text-decoration: underline;">Any Custom Events or dynamically added control events would not fire:</span><br />
Let’s first understand what the problem is all about. Suppose you have one custom delegate say alertDelegateand events alertEventon your usercontroland you want to handle the alertEventin your default page the container page where you are going to load your usercontrol. I mean, when you click a button inside the usercontroland raise the alertEventthen in your content page you would be able to handle the alertEvent as you are binding this event with the alertDelegate and some eventHandler present inside the default page. I know its bit clumsy to understand my example lets write it down in c# code in order to understand it clearly.<br />
Let,s you have WebUserControl1 and below code inside its code behind.</p>
<p>&nbsp;</p>
<pre>  
namespace DynamicUserControlLoading
{
public delegate string alertDelegate(string msg);
public partial class WebUserControl1 : System.Web.UI.UserControl
{
public event alertDelegatemyalertEvent;
protected void Page_Load(object sender, EventArgs e)
{

}

protected void Button1_Click(object sender, EventArgs e) { if (myalertEvent !=
null) { myalertEvent("He catch this event and show this message in content
page"); } } } }

</pre>
<p><span style="font-family: calibri; font-size: 1.2em;"><br />
And in your default page lets you have below code<br />
</span></p>
<pre> 
protected void Page_Load(object sender, EventArgs e)
{
WebUserControl1usercontrol= this.LoadControl("ucmycontrol.ascx") as WebUserControl1;
obj.myalertEvent += new alertDelegate(returnalert);
placeholder.Controls.Add(usercontrol);

} private string returnalert(string msg) { return msg; }

</pre>
<p><span style="font-family: calibri; font-size: 1.2em;"><br />
Then on click of the button present in the usercontrolit won’t be delegated to the default page in order to handle it by your returnalert method present in content or default page.</span></p>
<p>This problem is again related to the viewstatestuffs only as we know the Control Events get fired after the pageloadevent occurs as we were adding our placeholder in pageloadevent. However we are not persisting with the old controls after each postbackswe are adding a new instance of the usercontrol in each trip. Therefore, framework’s viewstate is not able to bind the events on the control events.</p>
<p>The solution to above problem is we have to add the events each time we created the usercontrolsnew instance in the placeholder however it should be in the oninit event only.</p>
<p>Therefore the code should be like below:</p>
<pre> 
protected override void OnInit(EventArgs e)
{
WebUserControl1usercontrol= this.LoadControl("ucmycontrol.ascx") as WebUserControl1;
obj.myalertEvent += new alertDelegate(returnalert);
placeholder.Controls.Add(usercontrol);
base.OnInit(e);
}
</pre>
<p><span style="font-family: calibri; font-size: 1.2em;"><br />
Now we could to solve both of the above 2 problems and we could dynamically add the usercontrol in default page successfully.</span></p>
<p>Above solution would work properly however it would have below restrictions:<br />
1) In each trip ( page load and post back ) you have to add the usercontrols new instance in place holder<br />
2) In each trip you have to bind the custom events and if you have dynamic buttons then rebind the events in each trip to those dynamic buttons.<br />
3) Once you loaded the usercontroland if you happened to inject some extra html through JavaScript or jQuery and if you do postback then it would throw exception that the control tree was changed. Therefore don’t change the places of control before posting the page back to the server.</p>
<p>Let me know if you have any suggestions or any correction on my understanding thanks for being with me… :)</p>
