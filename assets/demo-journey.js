/* Presentation order follows the existing BIAL demo; Rita closes with a flashback. */
(() => {
  const people = {
    artur:{name:"Dr. Artur Costa",image:"assets/personas/artur.png"},
    sofia:{name:"Sofia Martins",image:"assets/personas/sofia.png"},
    ines:{name:"Dr. Inês Carvalho",image:"assets/personas/ines.png"},
    joao:{name:"João Ferreira",image:"assets/personas/joao.png"},
    rita:{name:"Rita Almeida",image:"assets/personas/rita.png"}
  };
  const steps = [
    {
      title:"A first conversation",person:"Dr. Artur Costa",note:"The original invitation",color:"#163986",cast:["artur"],agenda:2,
      heading:"An invitation becomes a conversation",
      summary:"Artur could not attend the initial congress. He replies to the invitation to request reading material and a visit, opening the relationship that connects the demo.",
      moments:["Open the original invitation and Artur’s reply.","Show the conversational email exchange and the reading request.","Carry the request and its context into the representative visit."],
      handoff:"Sofia prepares for a conversation with Artur."
    },
    {
      title:"The representative visit",person:"Sofia Martins",note:"Prepare · visit · refer",color:"#007f9a",cast:["sofia","artur"],agenda:2,
      heading:"Sofia connects context with the visit",
      summary:"Sofia prepares with Artur’s profile and engagement history, then meets him at Hospital de Braga. His scientific question becomes a Medical Inquiry for Medical Affairs.",
      moments:["Prepare on the iPad and review the HCP context.","Bring the profile and relevant material into the visit.","Capture the Medical Inquiry in Artur’s words and refer it for scientific review."],
      handoff:"The individual question moves to Medical Affairs and Inês."
    },
    {
      title:"The scientific exchange",person:"Dr. Inês Carvalho",note:"Inquiry → dialogue → insight",color:"#5e43b0",cast:["ines","artur"],agenda:2,
      heading:"Inês turns dialogue into medical insight",
      summary:"Medical Affairs reviews the question before Inês’s scientific exchange with Artur. A broader educational need emerges and is captured separately as a Medical Insight.",
      moments:["Follow the Inquiry into Medical Affairs for a reviewed scientific response.","Meet Artur for the MSL scientific exchange.","Record the broader educational need as an Insight for medical review."],
      handoff:"After the break, the story follows an educational session at Hotel Porto Palácio."
    },
    {
      title:"Coffee break",person:"A pause together",note:"10 minutes",color:"#916900",cast:[],agenda:3,
      heading:"A moment to pause",
      summary:"A ten-minute break between the two visits and event management. Coffee, pastel de nata and a chance to reflect on the story so far.",
      moments:["Pause after the Medical Inquiry and Medical Insight sequence.","Return to see how Sofia brings the event together."],
      handoff:"Sofia takes the lead on planning the event."
    },
    {
      title:"Bringing the event to life",person:"Sofia Martins",note:"Plan · approve · register",color:"#007f9a",cast:["sofia","artur"],agenda:4,
      heading:"Sofia plans the event",
      summary:"Sofia manages the preparation, approvals and logistics for a later educational session at Hotel Porto Palácio, with Artur as the speaker.",
      moments:["Prepare the event, budget and approvals at BIAL’s Trofa offices.","Coordinate the invitation and speaker registration.","Keep event registration separate from optional marketing consent."],
      handoff:"The story moves from event planning to Hotel Porto Palácio."
    },
    {
      title:"Sharing knowledge",person:"Dr. Artur Costa",note:"Hotel Porto Palácio",color:"#163986",cast:["artur","sofia"],agenda:4,
      heading:"Artur takes the stage",
      summary:"At the later session at Hotel Porto Palácio, Artur is the speaker. Sofia follows participation through to event closure, connecting the educational moment with the event record.",
      moments:["Join the event and follow Artur’s presentation.","Record speaker participation and reconcile attendance.","Close the event and review the illustrative expenditure."],
      handoff:"João connects the relationship to the wider account strategy."
    },
    {
      title:"Connecting account strategy",person:"João Ferreira",note:"Stakeholders · plan · action",color:"#006fa6",cast:["joao"],agenda:5,
      heading:"João connects the account plan",
      summary:"João brings stakeholders, account objectives and agreed actions into one view. The account plan connects the commercial relationship while scientific responsibilities remain with Medical Affairs.",
      moments:["Explore the stakeholder map and account relationships.","Review the Account Plan and agree the next action.","Use the aggregated dashboard to review account progress."],
      handoff:"Rita takes us behind the scenes of Marketing Automation and the campaign that began the relationship."
    },
    {
      title:"Marketing Automation",person:"Rita Almeida",note:"Earlier · campaign creation",color:"#a82768",cast:["rita","artur"],agenda:6,
      heading:"Marketing Automation & Consent Management",
      summary:"The final demo is a look back, before Artur received the invitation. Rita shows Marketing Automation from segment to campaign, content, consent and follow-up, revealing how the first conversation began.",
      moments:["Segment: define the relevant HCP audience using profiles, interests and permitted engagement data.","Campaign: plan the outreach behind Artur’s original invitation.","Content: prepare the invitation and requested follow-up for review.","Consent: respect channel preferences and suppression, keeping event registration separate.","Follow-up: route reading and visit requests to the right owner and reconnect with Artur."],
      handoff:"One invitation. A continuous relationship."
    }
  ];
  const root = document.getElementById("demoFlow");
  const list = document.getElementById("demoFlowStops");
  const panel = document.getElementById("demoFlowPanel");
  const position = document.getElementById("demoFlowPosition");
  const previous = document.getElementById("demoFlowPrev");
  const next = document.getElementById("demoFlowNext");
  const agendaLink = document.getElementById("demoFlowAgenda");
  let active = 0;
  list.innerHTML = steps.map((step,i) => `<li><button type="button" class="flow-node" data-step="${i}" style="--step-color:${step.color}" aria-controls="demoFlowPanel" aria-label="Demo step ${i+1}: ${step.title}. ${step.person}."><span class="flow-number" aria-hidden="true">${String(i+1).padStart(2,"0")}</span><span class="flow-person">${step.person}</span><span class="flow-node-title">${step.title}</span><span class="flow-node-note">${step.note}</span></button></li>`).join("");
  const buttons = [...list.querySelectorAll("button")];
  function showStep(index) {
    if (index<0 || index>=steps.length) return;
    active=index;
    const step=steps[index];
    buttons.forEach((button,i) => {
      if(i===index) button.setAttribute("aria-current","step");
      else button.removeAttribute("aria-current");
    });
    panel.style.setProperty("--step-color",step.color);
    panel.innerHTML=`<div><p class="flow-detail-kicker">Demo ${String(index+1).padStart(2,"0")} · ${step.note}</p><h3 id="demoFlowStepTitle">${step.heading}</h3><p class="flow-summary">${step.summary}</p><div class="flow-cast">${step.cast.map(id=>`<a href="#persona-${id}"><img src="${people[id].image}" width="36" height="36" alt="">${people[id].name}</a>`).join("")}</div></div><div><h4>What happens in the demo</h4><ul class="flow-moments">${step.moments.map(moment=>`<li>${moment}</li>`).join("")}</ul><p class="flow-handoff"><strong>${index===steps.length-1?"The closing connection":"The next connection"}</strong>${step.handoff}</p></div>`;
    position.textContent=`${index+1} / ${steps.length}`;
    previous.disabled=index===0;
    next.disabled=index===steps.length-1;
    agendaLink.textContent=`View agenda item ${step.agenda+1} ↗`;
  }
  list.addEventListener("click",event=>{
    const button=event.target.closest("button[data-step]");
    if(button) {
      showStep(Number(button.dataset.step));
      const reduced=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.scrollIntoView({behavior:reduced?"auto":"smooth",block:"nearest"});
    }
  });
  previous.addEventListener("click",()=>showStep(active-1));
  next.addEventListener("click",()=>showStep(active+1));
  agendaLink.addEventListener("click",()=>go(steps[active].agenda));
  root.addEventListener("keydown",event=>{
    if(event.key!=="ArrowRight" && event.key!=="ArrowLeft") return;
    event.preventDefault();
    event.stopPropagation();
    showStep(active+(event.key==="ArrowRight"?1:-1));
    buttons[active].focus();
  });
  // Measure the real node centres so the route follows the responsive grid.
  function drawRoute() {
    const map=document.getElementById("demoFlowMap");
    const svg=document.getElementById("demoFlowLine");
    const bounds=map.getBoundingClientRect();
    if(!bounds.width || !bounds.height) return;
    svg.setAttribute("viewBox",`0 0 ${bounds.width} ${bounds.height}`);
    const points=buttons.map(button=>{
      const number=button.querySelector(".flow-number").getBoundingClientRect();
      return {x:number.left+number.width/2-bounds.left,y:number.top+number.height/2-bounds.top};
    });
    const vertical=points.every(point=>Math.abs(point.x-points[0].x)<2);
    let d=`M ${points[0].x} ${points[0].y}`;
    for(let i=1;i<points.length;i++) {
      const from=points[i-1],to=points[i];
      if(vertical || Math.abs(from.y-to.y)<4) d+=` L ${to.x} ${to.y}`;
      else {
        const right=from.x>bounds.width/2;
        const edge=right?bounds.width-10:10;
        const radius=18,sign=right?1:-1;
        d+=` L ${edge-sign*radius} ${from.y} Q ${edge} ${from.y} ${edge} ${from.y+radius} L ${edge} ${to.y-radius} Q ${edge} ${to.y} ${edge-sign*radius} ${to.y} L ${to.x} ${to.y}`;
      }
    }
    svg.querySelectorAll("path").forEach(path=>path.setAttribute("d",d));
  }
  let pending;
  const redraw=()=>{cancelAnimationFrame(pending);pending=requestAnimationFrame(drawRoute);};
  if(typeof ResizeObserver!=="undefined") new ResizeObserver(redraw).observe(document.getElementById("demoFlowMap"));
  window.addEventListener("resize",redraw);
  if(document.fonts) document.fonts.ready.then(redraw);
  showStep(0);
  redraw();
})();
