(self.webpackChunk=self.webpackChunk||[]).push([[4903],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(74165),o=n(15861),i=n(67294),r=n(92519),l=n(63472),s=n(67425);function p(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var i,s,p,d,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,s=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(i),e.next=21,l.G.create({provider:p});case 21:d=e.sent,(c=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return s=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return s=(s=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",s);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,s.HumanReadable)(e,n,a);break;case"precise":(0,s.Precise)(e,n,a);break;case"blocksToDays":(0,s.BlocksToDays)(e,a);break;case"arrayLength":(0,s.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var t=e.network,n=e.path,r=e.defaultValue,l=e.filter,s=void 0===l?void 0:l,d=(0,i.useState)(""),h=d[0],u=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==s?c(r.toString(),s,t,u):u(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==s?c(o,s,t,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(l){console.log(l)}}}),[]),h}},74494:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(67294),o=a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Lock Periods"),a.createElement("th",null,"Vote Multiplier"),a.createElement("th",null,"Length in Days")),a.createElement("tr",null,a.createElement("td",null,"0"),a.createElement("td",null,"0.1"),a.createElement("td",{id:"p0"})),a.createElement("tr",null,a.createElement("td",null,"1"),a.createElement("td",null,"1"),a.createElement("td",{id:"p1"})),a.createElement("tr",null,a.createElement("td",null,"2"),a.createElement("td",null,"2"),a.createElement("td",{id:"p2"})),a.createElement("tr",null,a.createElement("td",null,"4"),a.createElement("td",null,"3"),a.createElement("td",{id:"p4"})),a.createElement("tr",null,a.createElement("td",null,"8"),a.createElement("td",null,"4"),a.createElement("td",{id:"p8"})),a.createElement("tr",null,a.createElement("td",null,"16"),a.createElement("td",null,"5"),a.createElement("td",{id:"p16"})),a.createElement("tr",null,a.createElement("td",null,"32"),a.createElement("td",null,"6"),a.createElement("td",{id:"p32"})))),i=["p0","p1","p2","p4","p8","p16","p32"],r={p0:0,p1:28,p2:56,p4:112,p8:224,p16:448,p32:896},l={p0:0,p1:8,p2:16,p4:32,p8:64,p16:128,p32:256};function s(e){i.forEach((function(t){var n=document.getElementById(t);"polkadot"===e?n.innerText=r[t]:"kusama"===e&&(n.innerText=l[t])}))}const p=function(e){e.network;var t=(0,a.useState)("");return t[0],t[1],(0,a.useEffect)((function(){var e=document.title;"Governance \xb7 Polkadot Wiki"===e||"OpenGov \xb7 Polkadot Wiki"===e?s("polkadot"):"Governance \xb7 Guide"===e||"OpenGov \xb7 Guide"===e?s("kusama"):console.log("Unknown wiki/guide type")}),[]),o}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},42767:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(47940),l=n(74494);var s=["components"],p={id:"learn-opengov",title:"OpenGov",sidebar_label:"OpenGov",description:"Learn about Polkadot\u2019s next generation of decentralised governance.",keywords:["governance","referenda","proposal","voting","endorse"],slug:"../learn-opengov"},d=void 0,c={unversionedId:"learn/learn-opengov",id:"learn/learn-opengov",title:"OpenGov",description:"Learn about Polkadot\u2019s next generation of decentralised governance.",source:"@site/../docs/learn/learn-opengov.md",sourceDirName:"learn",slug:"/learn-opengov",permalink:"/docs/learn-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-opengov.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1677484271,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{id:"learn-opengov",title:"OpenGov",sidebar_label:"OpenGov",description:"Learn about Polkadot\u2019s next generation of decentralised governance.",keywords:["governance","referenda","proposal","voting","endorse"],slug:"../learn-opengov"},sidebar:"docs",previous:{title:"Governance",permalink:"/docs/learn-governance"},next:{title:"Identity",permalink:"/docs/learn-identity"}},h={},u=[{value:"Premise",id:"premise",level:2},{value:"Mechanism",id:"mechanism",level:2},{value:"Referenda",id:"referenda",level:2},{value:"Proposing a Referendum",id:"proposing-a-referendum",level:3},{value:"Public Referenda",id:"public-referenda",level:4},{value:"Council Referenda (v1)",id:"council-referenda-v1",level:4},{value:"Voting Timetable",id:"voting-timetable",level:4},{value:"Voting on a referendum (OpenGov)",id:"voting-on-a-referendum-opengov",level:4},{value:"Voluntary Locking",id:"voluntary-locking",level:4},{value:"Adaptive Quorum Biasing",id:"adaptive-quorum-biasing",level:4},{value:"Council",id:"council",level:2},{value:"Multirole Delegation",id:"multirole-delegation",level:3},{value:"Canceling Referenda",id:"canceling-referenda",level:3},{value:"Technical Committee",id:"technical-committee",level:2},{value:"Fellowship",id:"fellowship",level:2},{value:"Ranking System",id:"ranking-system",level:3},{value:"Whitelisting",id:"whitelisting",level:3},{value:"Blacklisting",id:"blacklisting",level:3},{value:"Resources",id:"resources",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot uses a sophisticated governance\nmechanism that allows it to evolve gracefully overtime at the ultimate behest of its assembled\nstakeholders. The stated goal is to ensure that the majority of the stake can always command the\nnetwork."),(0,i.kt)("admonition",{title:"The contents in this document are subject to change",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The governance protocol has already undergone a couple iterations (v1 and v2) with more changes in\nthe pipeline (v2.5).")),(0,i.kt)("p",null,"Polkadot's first decentralised governance\nsystem (v1) was comprised of three main components."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Technical Committee - A technocratic committee to manage upgrade timelines."),(0,i.kt)("li",{parentName:"ol"},'Council - An approval-voted, elected executive "government" to manage parameters, admin and\nspending proposals.'),(0,i.kt)("li",{parentName:"ol"},"Referenda - A general voting system for everything else which rewarded long-term stakeholders\nwith increased influence.")),(0,i.kt)("p",null,"This system has functioned well over the first few years of operation, helping ensure appropriate\nusage of treasury funds and enabling timely upgrades and fixes. Like most early technologies, the\nsystems and protocols must evolve as they mature to improve upon their shortcomings and keep up with\nmodern advancements. For example, in Governance v1 all referenda carry the same weight as only one\nreferenda can be voted on at a time and the voting period can last multiple weeks. This results in\nthe system favoring careful consideration of very few proposals, as opposed to broad consideration\nof many. With that being said, OpenGov (previously referred to as Governance v2 while in\ndevelopment) is here!"),(0,i.kt)("p",null,"OpenGov changes how the practical means of day-to-day decisions are made, making the repercussions\nof referenda better scoped and agile in order to dramatically increase the number of collective\ndecisions the system is able to make."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OpenGov is launched on Kusama. Once it is rigorously tested on Kusama, a proposal will be made for\nit to be deployed on Polkadot.")),(0,i.kt)("p",null,"The following content will begin by walking through many of the core principles of governance on the\nPolkadot network. It is important to\nunderstand the roots of governance v1 to better understand the direction of the second iteration.\nThese deltas and distinctions will be highlighted throughout the various sub-topics."),(0,i.kt)("p",null,"This being said, it is also important to remember that governance is a constantly evolving protocol\nat this stage in its lifecycle. As updates for OpenGov are making their way to the networks, plans\nfor future updates are already in development."),(0,i.kt)("h2",{id:"premise"},"Premise"),(0,i.kt)("p",null,"At a high level, the network brings together various novel mechanisms, including an amorphous\nstate-transition function stored on-chain and defined in a platform-neutral intermediate language\n(i.e. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly"),") and several on-chain voting mechanisms such as referenda with\nadaptive super-majority thresholds and batch approval voting."),(0,i.kt)("p",null,"All changes to the protocol must be agreed upon by stake-weighted referenda."),(0,i.kt)("h2",{id:"mechanism"},"Mechanism"),(0,i.kt)("p",null,"In Governance v1, active token holders and the council together administrate a network upgrade\ndecision. No matter whether the proposal is proposed by the public (token holders) or the council,\nit will eventually have to go through a referendum to let all holders, weighted by stake and\nconviction, make the decision."),(0,i.kt)("p",null,"To better understand how the council is formed, please read ",(0,i.kt)("a",{parentName:"p",href:"#council"},"this section"),"."),(0,i.kt)("p",null,"There are several changes here with OpenGov. The way the new governance model reflects its\ndecentralised character is by:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Migrating all responsibilities of Council to token holders via democracy votes"),(0,i.kt)("li",{parentName:"ol"},"Dissolving the current Council collective"),(0,i.kt)("li",{parentName:"ol"},"Allowing users to delegate voting power in more ways to community members")),(0,i.kt)("p",null,"The Council in Gov1 has fulfilled its role as the representative of passive token holders, guardian\nof the treasury and initiator of legislation, but is often seen as a centralized entity. To further\ndecentralize Polkadot and Kusama networks, OpenGov proposes to return the responsibilities of the\ncouncil back to the community."),(0,i.kt)("h2",{id:"referenda"},"Referenda"),(0,i.kt)("p",null,"Referenda are simple, inclusive, stake-based voting schemes. Each referendum has a specific\n",(0,i.kt)("em",{parentName:"p"},"proposal")," associated with it that takes the form of a privileged function call in the runtime (that\nincludes the most powerful call: ",(0,i.kt)("inlineCode",{parentName:"p"},"set_code"),', which can switch out the entire code of the runtime,\nachieving what would otherwise require a "',(0,i.kt)("a",{parentName:"p",href:"./../general/glossary#hard-fork"},"hard fork"),'").'),(0,i.kt)("p",null,"Referenda are discrete events that have a fixed voting period. When the voting period ends and the\nvotes are tallied, the function call (",(0,i.kt)("inlineCode",{parentName:"p"},"set_code"),') is made if the vote is approved. Referenda are\nalways binary; your only options in voting are "aye", "nay", or abstaining entirely.'),(0,i.kt)("p",null,"In Governance v1, referenda can be started in one of several ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Publicly submitted proposals;"),(0,i.kt)("li",{parentName:"ol"},"Proposals submitted by the council, either through a majority or unanimously;"),(0,i.kt)("li",{parentName:"ol"},"Proposals submitted as part of the enactment of a prior referendum;"),(0,i.kt)("li",{parentName:"ol"},"Emergency proposals submitted by the Technical Committee and approved by the Council.")),(0,i.kt)("p",null,"All referenda have an ",(0,i.kt)("em",{parentName:"p"},"enactment delay")," associated with them. This is the period between the\nreferendum ending and, assuming the proposal was approved, the changes being enacted."),(0,i.kt)("p",null,"Referenda is considered ",(0,i.kt)("em",{parentName:"p"},"baked")," if it is closed and tallied. Again, assuming the proposal was\napproved, it would be scheduled for enactment. Referenda is considered ",(0,i.kt)("em",{parentName:"p"},"unbaked")," if it is pending an\noutcome, i.e. being voted on."),(0,i.kt)("p",null,"If a proposal is submitted by the public or council there is a fixed enactment delay period of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.enactmentPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n",'\ndays. Proposals submitted as part of the enactment of a prior referendum can set the enactment delay\nperiod as desired. Emergency proposals deal with major problems with the network that need to be\n"fast-tracked", which leads to shorter enactment times.'),(0,i.kt)("p",null,"In OpenGov, anyone is able to start a referendum at any time and they can do so as many times as\nthey wish. Several new features, known as ",(0,i.kt)("strong",{parentName:"p"},"Origins and Tracks"),", are introduced to help aid in the\nflow and processing of the referenda protocol."),(0,i.kt)("p",null,"An Origin can be thought of as a rich descriptor for a given privilege level. The proposer of the\nreferenda now selects an appropriate Origin for their request based on the requirements of the\nproposal."),(0,i.kt)("p",null,"Each Origin is associated with a single referendum class and each class is associated with a Track.\nThe Track outlines the lifecycle for the proposal and is independent from other class's tracks.\nHaving independent tracks allows the network to tailor the dynamics of referenda based upon their\nimplied privilege level."),(0,i.kt)("p",null,"So for example, a runtime upgrade (",(0,i.kt)("inlineCode",{parentName:"p"},"set_code")," call) does not have the same implications for the\necosystem as the approval of a treasury tip (",(0,i.kt)("inlineCode",{parentName:"p"},"reportAwesome")," call), and therefore different Origins\nare needed in which different turnouts, approvals, deposits and a minimum enactment periods will be\npredetermined on the pallet."),(0,i.kt)("p",null,"For additional details, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-opengov#origins-and-tracks"},"Origin and Tracks")," section."),(0,i.kt)("h3",{id:"proposing-a-referendum"},"Proposing a Referendum"),(0,i.kt)("h4",{id:"public-referenda"},"Public Referenda"),(0,i.kt)("p",null,"In Governance V1, anyone can propose a referendum by depositing the minimum amount of tokens for a\ncertain period (number of blocks). If someone agrees with the proposal, they may deposit the same\namount of tokens to show support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this action is called ",(0,i.kt)("em",{parentName:"li"},"endorsing"),". The proposal with the highest amount of bonded support will be\nselected to be a referendum in the next voting cycle.")),(0,i.kt)("p",null,'Note that this may be different from the absolute number of endorsements; for instance, three\naccounts bonding\n20 DOT each would "outweigh" ten accounts bonding a single DOT each.\n'),(0,i.kt)("p",null,"The bonded tokens will be released once the proposal is tabled (that is, when it is brought to a\nvote)."),(0,i.kt)("p",null,"For Governance v1, there can be a maximum of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.maxProposals",defaultValue:100,mdxType:"RPC"}),"\n","\npublic proposals in the proposal queue."),(0,i.kt)("p",null,"In OpenGov, when a referendum is initially created, it can be immediately voted on by the community.\nHowever, it is not immediately in a state where it can end, or otherwise have its votes counted, be\napproved and summarily enacted. Instead, referenda must fulfil a number of criteria before they are\nmoved into a state known as ",(0,i.kt)("strong",{parentName:"p"},"Deciding"),". Until they are in the initial state, they remain\nundecided."),(0,i.kt)("p",null,"The criteria for entering the ",(0,i.kt)("strong",{parentName:"p"},"Deciding")," state is a follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},"lead-in period"),' that outlines the amount of time that must elapse before deciding can begin.\nThis helps mitigate against the possibility of "decision sniping" where an attacker controlling a\nsubstantial amount of voting power might seek to have a proposal passed immediately after\nproposing, not allowing the overall voting population adequate time to consider and participate.'),(0,i.kt)("li",{parentName:"ol"},"There must be room for the decision. All Tracks specify their own limit on the number of\nreferenda which can be decided simultaneously. Tracks that have more potent abilities will have\nlower limits. For example, the Root level Origin has a limit of one, implying that only a single\nproposal may be decided on at once."),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},"Decision Deposit")," must be submitted. Creating a referendum is cheap as the deposit value\nconsists of only the value required for the on-chain storage needed to track it. But, having a\nreferendum reviewed and decided upon carries the risk of using up the limited spots available in\nthe referenda queue. It makes sense to have a larger, but refundable deposit requirement to help\nmitigate spam.")),(0,i.kt)("p",null,"Once the three criteria listed above are met, the referendum moves to the ",(0,i.kt)("strong",{parentName:"p"},"Deciding")," state. The\nvotes of the referendum are now counted towards the outcome."),(0,i.kt)("h4",{id:"council-referenda-v1"},"Council Referenda (v1)"),(0,i.kt)("p",null,"Unanimous Council - When all members of the council agree on a proposal, it can be moved to a\nreferendum. This referendum will have a negative turnout bias (that is, the smaller the amount of\nstake voting, the smaller the amount necessary for it to pass - see\n",(0,i.kt)("a",{parentName:"p",href:"#adaptive-quorum-biasing"},"Adaptive Quorum Biasing"),")."),(0,i.kt)("p",null,"Majority Council - When agreement from only a simple majority of council members occurs, the\nreferendum can also be voted upon, but it will be majority-carries (51% wins)."),(0,i.kt)("p",null,"There can only be one active referendum at any given time, except when there is also an emergency\nreferendum in progress."),(0,i.kt)("h4",{id:"voting-timetable"},"Voting Timetable"),(0,i.kt)("p",null,"In Governance v1, every\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.votingPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays, a new referendum will be up for a vote, assuming there is at least one proposal in one of the\nqueues. There is a queue for Council-approved proposals and a queue for publicly submitted\nproposals. The referendum to be voted upon alternates between the top proposal in the two queues."),(0,i.kt)("p",null,'The "top" proposal is determined by the amount of stake bonded behind it. If the current queue\nselection attempts to create a referendum with no proposals (it is empty) and proposals are waiting\nin the other queue, the top proposal in the other queue will become a referendum.'),(0,i.kt)("p",null,"Multiple referenda cannot be voted upon in the same period, excluding emergency referenda. An\nemergency referendum occurring at the same time as a regular referendum (either public or\ncouncil-proposed) is the only time that multiple referenda will be able to be voted on\nsimultaneously."),(0,i.kt)("p",null,"OpenGov shares the same\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.votingPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\nday eligibility period when the proposal can get approved. If not approved by then end of this\nperiod, the proposal is automatically rejected."),(0,i.kt)("h4",{id:"voting-on-a-referendum-opengov"},"Voting on a referendum (OpenGov)"),(0,i.kt)("p",null,"In OpenGov, a proposal is approved if it meets the requirements for ",(0,i.kt)("strong",{parentName:"p"},"approval")," and ",(0,i.kt)("strong",{parentName:"p"},"support"),",\nremoving the adaptive quorum biasing system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Approval")," is defined as the share of approval vote-weight (after adjustment for conviction)\nagainst the total vote-weight (for both approval and rejection)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Support")," is the total number of votes in the approval (ignoring any adjustment for conviction)\ncompared to the total possible votes that could be made in the system."),(0,i.kt)("p",null,"It must fulfill this criteria for the minimum of the ",(0,i.kt)("strong",{parentName:"p"},"Confirmation Period"),". Different tracks have\ndifferent Confirmation Periods and requirements for approval and support. For additional details on\nthe various origins and tracks, check out\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-opengov#origins-and-tracks"},"this table"),". It is now possible to\nconfigure the amount of support and overall approval required for it to pass. With proposals that\nuse less privileged origins, it is far more reasonable to drop the required turnout to a more\nrealistic amount earlier than those which use highly privileged classes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Root"),". Classes with\nmore political significance can be made to require a higher approval early on, to avoid controversy."),(0,i.kt)("p",null,"In OpenGov, proposals that are not approved after\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.votingPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays are considered rejected by default and the Decision Deposit is refunded. If the proposal\nmanages to stay passing until the end of the Confirmation Period, it is considered approved and is\nscheduled to execute from the proposed origin but after the Enactment Period. The Enactment Period\nis specified when the referendum is proposed but is also subject to a minimum value based on the\nTrack. More powerful Tracks enforce a larger Enactment Period to ensure the network has ample time\nto prepare for any changes the proposal may bring."),(0,i.kt)("h4",{id:"voluntary-locking"},"Voluntary Locking"),(0,i.kt)("p",null,"Polkadot utilizes a concept called\n",(0,i.kt)("inlineCode",{parentName:"p"},"Voluntary Locking")," which allows token holders to increase their voting power by declaring how long\nthey are willing to lock up their tokens, hence, the number of votes for each token holder will be\ncalculated using the following formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"votes = tokens * conviction_multiplier\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"conviction multiplier")," increases the vote multiplier by one every time the number of lock\nperiods double."),(0,i.kt)("p",null,"",(0,i.kt)(l.Z,{network:"polkadot",mdxType:"VLTable"}),"\n",""),(0,i.kt)("p",null,'The maximum number of "doublings" of the lock period is set to 6 (and thus 32 lock periods in\ntotal), and one lock period equals\n',(0,i.kt)(r.Z,{network:"polkadot",path:"consts.democracy.voteLockingPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays. Only doublings are allowed; you cannot lock for, say, 24 periods and increase your conviction\nby 5.5. For additional information regarding the timeline of governance events, check out the\ngovernance section on the\n",(0,i.kt)("a",{parentName:"p",href:"../docs/maintain-polkadot-parameters/#governance"},"Polkadot Parameters page"),".\n",""),(0,i.kt)("p",null,"While a token is locked, you can still use it for voting and staking; you are only prohibited from\ntransferring these tokens to another account."),(0,i.kt)("p",null,'Votes are always "counted" at the same time, which is at the end of the voting period. This is not\nimpacted by the locking period of the tokens.'),(0,i.kt)("h4",{id:"adaptive-quorum-biasing"},"Adaptive Quorum Biasing"),(0,i.kt)("p",null,"Adaptive quorum biasing is no longer used in OpenGov and has been replaced with the Approval/Support\nsystem."),(0,i.kt)("h2",{id:"council"},"Council"),(0,i.kt)("p",null,'In Governance v1, passive stakeholders are represented on\nPolkadot via a governing body known as the\n"council". The council is an on-chain entity comprising several actors, each represented as an\non-chain account. On Polkadot, the council\ncurrently consists of\n',(0,i.kt)(r.Z,{network:"polkadot",path:"query.council.members",defaultValue:Array(13),filter:"arrayLength",mdxType:"RPC"}),"\n","\nmembers."),(0,i.kt)("p",null,"Along with ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"controlling the treasury"),", the council is called upon primarily for\nthree tasks of governance:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Proposing sensible referenda"),(0,i.kt)("li",{parentName:"ol"},"Cancelling dangerous or malicious referenda"),(0,i.kt)("li",{parentName:"ol"},"Electing the Technical Committee")),(0,i.kt)("h3",{id:"multirole-delegation"},"Multirole Delegation"),(0,i.kt)("p",null,"In OpenGov, an alternate strategy was required to replace the Council in its previous duties as a\nbody delegated by voters to compensate for the fact that many choose to not take part in day-to-day\nof governance. OpenGov builds on the ",(0,i.kt)("strong",{parentName:"p"},"Vote Delegation")," feature from v1 where a voter can choose to\ndelegate their voting power to another voter in the system. It does so by improving a feature known\nas ",(0,i.kt)("strong",{parentName:"p"},"Multirole Delegation"),", where voters can specify a different delegate for every class of\nreferendum in the system. Delegation can be done per track, and accounts can choose to select\ndifferent delegates (or no delegation) for each track."),(0,i.kt)("p",null,"For example, a voter could delegate one entity for managing a less potent referenda class, choose a\ndifferent delegate for a different class with more powerful consequences and still retain full\nvoting power over any remaining classes."),(0,i.kt)("p",null,"Occasional delegation and undelegation calls are fee-free: creating an incentive for token holders\nto use this feature and ensure that wallets can do it \u201cby default\u201d without any cost to end-users. It\nis worth noting that a user delegating their voting power does not imply that the delegate will have\ncontrol over the funds of the delegating account: they can vote with a user's voting power: but they\nwon't be able to transfer your balance, nominate a different set of validators or execute any call\nother than voting on the defined call/s by the user."),(0,i.kt)("p",null,"With the new delegation features, the goal is to ensure the required turnouts for proposals to be\nenacted are reached while maintaining the anonymity of voters and keeping the overall design\ncensorship-free."),(0,i.kt)("p",null,"For a step-by-step outline of how to delegate voting power in OpenGov, check out the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-opengov#delegating-voting-power"},"Delegating Voting Power")," section\non the ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-opengov"},"OpenGov Maintenance")," page."),(0,i.kt)("h3",{id:"canceling-referenda"},"Canceling Referenda"),(0,i.kt)("p",null,"In Governance v1, a proposal can be canceled if the ",(0,i.kt)("a",{parentName:"p",href:"#technical-committee"},"Technical Committee"),"\nunanimously agrees to do so, or if Root origin (e.g. sudo) triggers this functionality. A canceled\nproposal's deposit is burned."),(0,i.kt)("p",null,"Additionally, a two-thirds majority of the council can cancel a referendum. This may function as a\nlast-resort if there is an issue found late in a referendum's proposal such as a bug in the code of\nthe runtime that the proposal would institute."),(0,i.kt)("p",null,"If the cancellation is controversial enough that the council cannot get a two-thirds majority, then\nit will be left to the stakeholders ",(0,i.kt)("em",{parentName:"p"},"en masse")," to determine the fate of the proposal."),(0,i.kt)("p",null,"In OpenGov, there is a special operation called ",(0,i.kt)("strong",{parentName:"p"},"Cancelation")," for intervening with a proposal that\nis already being voted on. The operation will immediately reject an ongoing referendum regardless of\nits status. There is also a provision to ensure the deposit of the proposer is slashed, if the\nproposal is malicious or spam."),(0,i.kt)("p",null,"Cancelation itself is a governance operation which must be voted upon by the network in order to be\nexecuted. Cancelation comes with its own Origin and Track which has a low lead-time and\nApproval/Support curves with slightly sharper reductions in their thresholds for passing, given that\nit is invoked with a sense of urgency."),(0,i.kt)("h2",{id:"technical-committee"},"Technical Committee"),(0,i.kt)("p",null,"In Governance v1, the Technical Committee (TC) was introduced in the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/kusama-rollout-and-governance/"},"Kusama rollout and governance post")," as one\nof the three chambers of Kusama governance (along with the Council and the Referendum chamber). The\nTC is composed of the teams that have successfully implemented or specified either a\nPolkadot runtime or\nPolkadot host. Teams are added or removed from\nthe TC via a simple majority vote of the ",(0,i.kt)("a",{parentName:"p",href:"#council"},"Council"),"."),(0,i.kt)("p",null,'The purpose of the TC is to safeguard against malicious referenda, implement bug fixes, reverse\nfaulty runtime updates, or add new but battle-tested features. The TC has the power to fast-track\nproposals by using the Democracy pallet, and is the only origin that is able to trigger the\nfast-tracking functionality. We can think of the TC as a "unique origin" that cannot generate\nproposals, but are able to fast track existing proposals.'),(0,i.kt)("p",null,"Fast-tracked referenda are the only type of referenda that can be active alongside another active\nreferendum. Thus, with fast-tracked referenda it is possible to have two active referendums at the\nsame time. Voting on one does not prevent a user from voting on the other."),(0,i.kt)("p",null,'In OpenGov, a new successor committee was introduced, known as the "Polkadot Fellowship", to replace\nthe Technical Committee. It will serve both the Polkadot and Kusama networks. See additional details\nbelow.'),(0,i.kt)("h2",{id:"fellowship"},"Fellowship"),(0,i.kt)("p",null,"The Fellowship is a mostly self-governing expert body with a primary goal of representing humans who\nembody and contain the technical knowledge base of the Kusama and/or Polkadot networks and\nprotocols. This is accomplished by associating a rank with members to categorize the degree to which\nthe system expects their opinion to be well-informed, of a sound technical basis and in line with\nthe interests of Polkadot and Kusama."),(0,i.kt)("p",null,"Unlike the current Technical Collective, it is designed to be far broader in membership (i.e. to\nwork well with even tens of thousands of members) and with far lower barrier to entry (both in terms\nof administrative process flow and expectations of expertise). Becoming a candidate member in the\nFellowship is as easy as placing a small deposit."),(0,i.kt)("p",null,"The mechanism by which the Fellowship votes is the same as what is used for Polkadot and Kusama\nstakeholder voting for a proposed referendum. Members of the Fellowship can vote on any given\nFellowship proposal and the aggregate opinion of the members (weighted by their rank) constitutes\nthe Fellowship's considered opinion."),(0,i.kt)("p",null,"",""),(0,i.kt)("h3",{id:"ranking-system"},"Ranking System"),(0,i.kt)("p",null,"So how exactly does this ranking system work?"),(0,i.kt)("p",null,"To prevent a small group of participants from gaining effective control over the network, this\nsystem will adhere to three main principles:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Fellowship must never have hard power over the network: it cannot change the parameters,\nconduct rescues or move assets. Their only power in governance resides in the ability to reduce\nthe effective timeline on which a referendum takes place."),(0,i.kt)("li",{parentName:"ol"},"The Fellowship weights those with a higher rank more in the aggregate opinion, however the weight\nshould not be so high as to make a small number of higher members\u2019 opinions be insurmountable\nwhen compared to a coherent opinion coming from lower-ranked membership."),(0,i.kt)("li",{parentName:"ol"},"The Fellowship should be designed to grow and develop its membership and their aggregate levels\nof expertise and in doing so ensure that its overall decision-making capacity gets stronger over\ntime.")),(0,i.kt)("p",null,"To support these conditions, the Fellowship will have a constitution which outlines the requirements\nand expectations for individuals to attain and retain any given rank. Higher ranks are able to vote\nand promote lower ranks based on this constitution."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Demotion")," occurs automatically after a given period has elapsed and the member is unable to\ndefend their position to their peers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Suspension")," can happen only through general referendum, which ensures that the Fellowship's bias\nalone does not necessarily result in expulsion."),(0,i.kt)("p",null,"To prevent the Fellowship from becoming a cabal (popularity with Fellowship peers alone should not\nbe enough to gain access to a top rank), gaining access to top tiers of the ranks will require a\nreferendum."),(0,i.kt)("h3",{id:"whitelisting"},"Whitelisting"),(0,i.kt)("p",null,"The Whitelist pallet does one thing: it allows one Origin to escalate the privilege level of another\nOrigin for a certain operation."),(0,i.kt)("p",null,"In OpenGov, it allows the Fellowship to authorise a new origin (known as Whitelisted-Root) to be\nexecuted with Root-level privileges and will only work with certain specified commands that have\nbeen authorised by the Fellowship. The Whitelist pallet verifies two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The origin really is the Whitelisted-Root (i.e. that the referendum passed on this track)"),(0,i.kt)("li",{parentName:"ol"},"The proposal has indeed been whitelisted by the Fellowship.")),(0,i.kt)("p",null,"If both conditions are true, the operation executes with Root-level privileges."),(0,i.kt)("p",null,"This system enables the ability to have a new parallel Track (Whitelisted-Root Origin), whose\nparameters allow for a shorter voting turnaround. Through an open and transparent process, a body of\nglobal experts on the Polkadot protocol have\ndetermined that the action is both safe and time-critical."),(0,i.kt)("h3",{id:"blacklisting"},"Blacklisting"),(0,i.kt)("p",null,"A proposal can be blacklisted by Root origin (e.g. sudo). A blacklisted proposal and its related\nreferendum (if any) are immediately ",(0,i.kt)("a",{parentName:"p",href:"#canceling"},"canceled"),". Additionally, a blacklisted proposal's\nhash cannot re-appear in the proposal queue. Blacklisting is useful when removing erroneous\nproposals that could be submitted with the same hash, i.e.\n",(0,i.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot/democracy/proposal/2"},"proposal #2")," in which the submitter used plain\ntext to make a suggestion."),(0,i.kt)("p",null,"Upon seeing their proposal removed, a submitter who is not properly introduced to the democracy\nsystem of Polkadot might be tempted to\nre-submit the same proposal. That said, this is far from a fool-proof method of preventing invalid\nproposals from being submitted - a single changed character in a proposal's text will also change\nthe hash of the proposal, rendering the per-hash blacklist invalid."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/wiki/Governance"},"Initial Governance Description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/democracy/src"},"Democracy Pallet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VsZuDJMmVPY&feature=youtu.be&t=24734"},"Governance Demo")," - Dr.\nGavin Wood presents the initial governance structure for Polkadot. (Video)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/governance-on-polkadot--"},"Governance on Polkadot")," - A webinar\nexplaining how governance works in Polkadot and Kusama."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/gov2-polkadots-next-generation-of-decentralised-governance-4d9ef657d11b"},"Governance v2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Direction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io/"},"PolkAssembly"))))}f.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);