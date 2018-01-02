var ActionEvents=function(){"use strict";var t=function(){this.actions={}};return t.prototype.subscribeToAction=function(t,e){t&&e&&(this.actions[t]?this.actions[t].push(e):this.actions[t]=[e])},t.prototype.unSubscribeActionFn=function(t,e){if(t&&this.actions[t]){var s=this.actions[t].indexOf(e);s>=0&&delete this.actions[t][s]}},t.prototype.unSubscribeAllAction=function(t){t&&this.actions[t]&&delete this.actions[t]},t.prototype.triggerAction=function(t){if(t&&this.actions[t])for(var e=0;this.actions.hasOwnProperty(t)&&e<this.actions[t].length;e++)this.actions[t][e]&&"function"==typeof this.actions[t][e]&&this.actions[t][e](arguments)},t}(),IntroTourFlow=function(t,e,s,i,n,o){"use strict";var r=function(t){r.prototype.setup(t)};return r.prototype.setup=function(t){if(!t||!t.tour||!t.tour.steps||0===t.tour.steps.length)throw new Error("Steps Array needs to have at least one step");this.tourName=t.name,this.steps=t.tour.steps,this.exitStep=t.tour.exitStep,this.welcomeStep=t.tour.welcomeStep,this.laterStep=t.tour.laterStep,this.isLater=t.isLater,this.lastIndexComplete=this.currentStepIndex=-1,this.currentStep=null,this.actionEvents=new e,this.pingManager=new n({steps:this.steps}),this.invisibleShade=new o({shadeClass:"invisible-shade"}),this.darkShade=new o({shadeClass:"dark-shade"})},r.prototype.getFirstStep=function(){return this.steps.length>0?(this.currentStepIndex=0,this.steps[this.currentStepIndex]):null},r.prototype.getLastStep=function(){return this.steps.length>0?this.steps[this.steps.length-1]:null},r.prototype.getNextStep=function(){return this.hasNextStep()?this.steps[++this.currentStepIndex]:null},r.prototype.getPreviousStep=function(){return this.hasPreviousStep()?this.steps[--this.currentStepIndex]:null},r.prototype.getExitStep=function(){return this.exitStep},r.prototype.hasNextStep=function(){return this.currentStepIndex+1<this.steps.length},r.prototype.hasPreviousStep=function(){return this.currentStepIndex-1>=0},r.prototype.setCurrentStep=function(t){this.currentStep=t,this.currentStepIndex=-1;for(var e=0;e<this.steps.length;e++)if(this.steps[e]===t){this.currentStepIndex=e;break}return this.currentStepIndex},r.prototype.goToStep=function(e){if(e){t.tourDialogBase.open({options:e,flow:this}),this.setCurrentStep(e),-1!==this.currentStepIndex&&(this.lastIndexComplete=this.currentStepIndex,this.pingManager.showAllFuture(this.currentStepIndex)),e.openAction&&"function"==typeof e.openAction&&e.openAction(),e.shadeOn&&(this.invisibleShade.show(),this.darkShade.show()),e.shadeOff&&(this.invisibleShade.hide(),this.darkShade.hide());var s=this;e.autoClose&&e.autoClose>0&&(s.isCurrentStepClosed=!1,setTimeout(function(){s.isCurrentStepClosed||(s.closeCurrentStep(),s.executeAction("close"))},e.autoClose))}},r.prototype.closeCurrentStep=function(){this.isCurrentStepClosed=!0,t.tourDialogBase.close(!0),this.pingManager.hideAll(),this.currentStep&&this.currentStep.closeAction&&"function"==typeof this.currentStep.closeAction&&this.currentStep.closeAction()},r.prototype.startFlow=function(t){t?this.executeAction("start",t):this.isLater&&this.laterStep?this.goToStep(this.laterStep):(this.goToStep(this.welcomeStep),i.sendLpImprove("vaulttour",{version:this.tourName})),s.get(s.ESCAPE).subscribe(this.getEscapeHandler())},r.prototype.getEscapeHandler=function(){var t=this;return t.escapeHandler||(t.escapeHandler=function(){t.closeCurrentStep(),t.executeAction(t.lastIndexComplete>=0?"exit":"close")}),t.escapeHandler},r.prototype.executeAction=function(t,e){switch(t){case"start":this.goToStep(this.getFirstStep()),this.invisibleShade.show(),this.darkShade.show(),!0===e?i.sendLpImprove("vaulttour::start",{version:this.tourName,source:"help"}):(i.sendLpImprove("vaulttour::choice",{version:this.tourName,choice:t}),i.sendLpImprove("vaulttour::start",{version:this.tourName,source:"welcome"}));break;case"next":this.goToStep(this.getNextStep());break;case"previous":this.goToStep(this.getPreviousStep());break;case"exit":this.goToStep(this.getExitStep());break;case"later":case"never":this.invisibleShade.cleanup(),this.darkShade.cleanup(),i.sendLpImprove("vaulttour::choice",{version:this.tourName,choice:t});break;case"close":this.invisibleShade.cleanup(),this.darkShade.cleanup(),s.get(s.ESCAPE).unsubscribe(this.escapeHandler),this.lastIndexComplete>=0&&i.sendLpImprove("vaulttour::exit",{version:this.tourName,page:this.lastIndexComplete+1,action:e&&"string"==typeof e?e:"close"});break;default:"function"==typeof t&&t.bind(this)()}this.actionEvents&&this.actionEvents.triggerAction(t)},r.prototype.cleanup=function(){this.invisibleShade&&(this.invisibleShade.cleanup(),delete this.invisibleShade),this.darkShade&&(this.darkShade.cleanup(),delete this.darkShade),this.pingManager&&(this.pingManager.cleanup(),delete this.pingManager),this.currentStep=null,delete this.steps,delete this.exitStep,delete this.welcomeStep,delete this.laterStep},r.prototype.subscribeToAction=function(t,e){this.actionEvents.subscribeToAction(t,e)},r.prototype.unSubscribeAction=function(t){this.actionEvents.unSubscribeAllAction(t)},r}(dialogs,ActionEvents,Topics,bg,lpPingManager,IntroTourShade);