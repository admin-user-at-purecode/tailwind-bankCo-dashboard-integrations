import React from "react";
import dropbox from "../../assets/images/integrations/dropbox.svg";
import facebook from "../../assets/images/integrations/facebook.svg";
import googleMeet from "../../assets/images/integrations/google_meet.svg";
import mailChimo from "../../assets/images/integrations/mailchimp.svg";
import msExcel from "../../assets/images/integrations/ms_excel.svg";
import slack from "../../assets/images/integrations/slack.svg";
import stackOverflow from "../../assets/images/integrations/stack_overflow.svg";
import tikTok from "../../assets/images/integrations/tik-tok.svg";
import trello from "../../assets/images/integrations/trello.svg";
import twitter from "../../assets/images/integrations/twitter.svg";
import wordpress from "../../assets/images/integrations/wordpress.svg";
import youtube from "../../assets/images/integrations/youtube.svg";
import Integration from "../../component/integration/Integration";

const integrations = [
  {
    id: 1,
    img: stackOverflow,
    title: "Stack Overflow",
    category: "Social",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 2,
    img: msExcel,
    title: "Microsoft Excel",
    category: "Analitycs",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "disconnect",
  },
  {
    id: 3,
    img: trello,
    title: "Trello",
    category: "Management",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "disconnect",
  },
  {
    id: 4,
    img: mailChimo,
    title: "Mail Chimp",
    category: "Business",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "disconnect",
  },
  {
    id: 5,
    img: slack,
    title: "Slack",
    category: "Social",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 6,
    img: googleMeet,
    title: "Google Meet",
    category: "Management",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 7,
    img: dropbox,
    title: "Drop Box",
    category: "Business",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 8,
    img: wordpress,
    title: "Wordpress",
    category: "Business",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 9,
    img: facebook,
    title: "Facebook",
    category: "Social",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 10,
    img: twitter,
    title: "Twitter",
    category: "Social",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 11,
    img: youtube,
    title: "Youtube",
    category: "Entertainment",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
  {
    id: 12,
    img: tikTok,
    title: "TikTok",
    category: "Entertainment",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    status: "connect",
  },
];

function Integrations() {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px]">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-3 lg:gap-4 xl:gap-6">
        <Integration integration={integrations[0]} />

        <Integration integration={integrations[1]} />

        <Integration integration={integrations[2]} />

        <Integration integration={integrations[3]} />

        <Integration integration={integrations[4]} />

        <Integration integration={integrations[5]} />

        <Integration integration={integrations[8]} />

        <Integration integration={integrations[6]} />

        <Integration integration={integrations[8]} />

        <Integration integration={integrations[7]} />

        <Integration integration={integrations[8]} />

        <Integration integration={integrations[9]} />

        <Integration integration={integrations[10]} />

        <Integration integration={integrations[11]} />
      </div>
    </main>
  );
}

export default Integrations;
