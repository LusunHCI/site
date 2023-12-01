import React from 'react'
import Title from '../layouts/Title'
import { projectMetaWriter, projectReviewFlow, projectDesignInteraction,projectReview,projectPreference,projectXTZ,
  projectNewsGuesser,
  projectChatbot,
  projectDataTalk,
  projectSD,
  projectSocialRoles,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black">
      <div className="flex justify-left items-center text-left py-4">
      <Title title="Research Highlight">
      </Title>
      </div>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-gray-200 text-darkColor font-bold rounded-t px-4 py-2">
          LLM Scaffolding for Academic Peer Review
        </div>
        <div class="border border-t-0 border-grey-400 rounded-b bg-white0 px-4 py-3">
          <div className="w-full flex justify-center overflow-hidden rounded">
          <img
            className="w-1/3"
            src={projectReview}
            alt="src"
          />
        </div>
        <div>
          <ProjectsCard
            title="MetaWriter: Exploring the Potential and Perils of AI Writing Support in Scientific Peer Review"
            author = "Lu Sun, Stone Tao, Junjie Hu, and Steven P. Dow"
            conference = "CSCW 24: Accepted at The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing"
            abs="Recent advances in Large Language models (LLMs) show the potential to significantly augment or even replace complex human writing activities. However, for complex tasks where people need to make decisions as well as write a justification, the trade offs between making work efficient and hindering decisions remain unclear. 
            In this paper, we explore this question in the context of providing intelligent scaffolding for writing meta-reviews as part of the academic peer review process.
             We prototyped a system called “MetaWriter” trained on 5 years of open peer review data to support meta-reviewing. 
             The system highlights common topics in the original peer reviews, extracts key points by each reviewer, and on request, provides a preliminary draft of a meta-review that can be further edited. 
             To understand how novice and experienced meta-reviewers use MetaWriter, we conducted a within-subject study with 32 participants. 
             Each participant wrote meta-reviews for two papers: one with and one without MetaWriter. 
             We found that MetaWriter significantly expedited the authoring process and improved the coverage of meta-reviews, as rated by experts, compared to the baseline. While participants recognized the efficiency benefits, they raised concerns around trust, over-reliance, and agency.
             We also interviewed six paper authors to understand their opinions of using machine intelligence to support the peer review process and reported critical reflections. "
            src={projectMetaWriter}
            pdfLink="https://drive.google.com/file/d/1tGG9fBQURdXNmE8AMMbEpLHANFXJka8W/view?usp=sharing"
            websiteLink="https://meta-assistant.netlify.app/metareview/0?user_id=test&cv=B"
            tags={["meta-review","abstractive summarization", "extractive summarization", "scaffolding","fine-tuning LLM", "React"]}
          />
        </div>
        <div>
        <ProjectsCard
            title="Intelligent Scaffolding to Support a Workflow for Academic Peer Reviews"
            author = "Lu Sun, Aaron Chan, Yunseo Chang, Steven P. Dow"
            conference = "Under Review, Anonymized title for Peer Review"
            abs="Peer review is essential to the scientific process. Research communities conduct peer reviews to assess contributions and to improve the overall quality of science work. As research communities grow, and review volunteers spread thin, less experienced researchers are often recruited as peer reviewers for the first time. 
            We sought to explore how scaffolding could be designed to help novices adopt a research community's practices and standards for peer reviewing.
            We developed an AI-driven workflow prototype that scaffolds novices with contextual cues to critique and annotate submissions, in-situ knowledge support to assess novelty, and notes-to-outline synthesis to streamline the writing of reviews that align with community expectations."
            src={projectReviewFlow}
            pdfLink=""
            websiteLink=""
            tags={["LLM scaffolding","adademic peer review", "GPT-4", "React"]}
          />
        </div>
        <div>
        <ProjectsCard
            title="Designing interactions with AI to support the scientific peer review process"
            author = "Lu Sun, Stone Tao, Junjie Hu, and Steven P. Dow"
            conference = "ICML 2023 Human-AI Workshop: Accepted at The Forty-first International Conference on Machine Learning AI and HCI Workshop"
            abs="Mapping the design space of using AI interactions to support the scientific peer review process."
            src={projectDesignInteraction}
            pdfLink="https://github.com/helenavasc/AI_HCI_Workshop_ICML_2023/blob/b87ed234b42e8fecb5622fddea84d1e4f77c80fa/papers/DesignInteractionswithAItoScientificReview.pdf"
            websiteLink="https://github.com/helenavasc/AI_HCI_Workshop_ICML_2023/blob/cf1ad4bf719f82407c40bba01293ac5ea8cbb587/posters/poster-DesignInteractionswithAItoScientificReview.pdf"
            tags={["adademic peer review eco-system","LLM scaffolding", "agency", "trust"]}
          />
        </div>
        </div>
      </div>
      </div>
      <br></br>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-gray-200 text-darkColor font-bold rounded-t px-4 py-2">
         AI for work
        </div>
        <div class="border border-t-0 border-grey-400 rounded-b bg-white0 px-4 py-3">
          <div className="w-full flex justify-center overflow-hidden rounded">
        </div>
        <div>
          <ProjectsCard
            title="Rhythm of Work: Mixed-methods Characterization of Information Workers Scheduling Preferences and Practices"
            author = "Lu Sun, Lillio Mok, Shilad Sen, Bahar Sarrafzadeh"
            conference = "CSCW 24: Under Revision for The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing"
            abs="As processes around hybrid work, spatially distant collaborations, and work-life boundaries grow increasingly complex, managing workers' schedules for synchronous meetings has become a critical aspect of building successful global teams. However, gaps remain in our understanding of workers' scheduling preferences and practices, which we aim to fill in this large-scale, mixed-methods study of individuals calendars in a multinational organization. Using interviews with eight participants, survey data from 165 respondents, and telemetry data from millions of meetings scheduled by 211 thousand workers, we characterize scheduling preferences, practices, and their relationship with each other and organizational factors. We find that temporal preferences can be broadly classified as either cyclical, such as suitability of certain days, or relational, such as dispersed meetings, at various time scales. Furthermore, our results suggest that these preferences are disconnected from actual practice--albeit with several notable exceptions--and that individual differences are associated with factors like meeting load, time-zones, importance of meetings to job function, and job titles"
            src={projectPreference}
            pdfLink="https://arxiv.org/pdf/2309.08104.pdf"
            websiteLink=""
            tags={["scheduling preference","misalignment", "mixed-methods study"]}
          />
        </div>
        <div>
          <ProjectsCard
            title="Challenging but Connective: Large-Scale Characteristics of Synchronous Collaboration Across Time Zones"
            author = "Lillio Mok, Lu Sun, Shilad Sen, Bahar Sarrafzadeh"
            conference = "CHI 23: In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems"
            abs="Organizations are becoming increasingly distributed and many
            need to collaborate synchronously over great geographical distances. Despite a rich body of literature on spatially-distanced meetings, gaps remain in our understanding of temporally-distanced
            meetings. Here, we characterize cross time zone collaborations by analyzing 20 million meetings scheduled at a multinational corporation, Microsoft, supported by a survey on how 130 employees
            perceive their scheduling needs. We fnd that cross time zone meetings are closely associated with scheduling patterns around early
            morning and late evening hours, which are challenging and discordant with employees' stated temporal preferences. Additionally,
            the burdens of meeting across time boundaries are asymmetrically distributed among workers at diferent levels of the organization
            and diferent geolocations. Nonetheless, we further observe evidence that cross time zone attendees are organizationally distant
            and diverse, suggesting that addressing these challenges by limiting meetings would disaford employees the opportunities to connect."
            src={projectXTZ}
            pdfLink="https://arxiv.org/pdf/2309.08104.pdf"
            websiteLink=""
            tags={["Collaboration","remote work", "time zone", "connectivity"]}
          />
        </div>
        </div>
      </div>
      </div>

      <br></br>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-gray-200 text-darkColor font-bold rounded-t px-4 py-2">
         Personalized Recommendation and Filter Bubble
        </div>
        <div class="border border-t-0 border-grey-400 rounded-b bg-white0 px-4 py-3">
          <div className="w-full flex justify-center overflow-hidden rounded">
        </div>
        <div>
          <ProjectsCard
            title="Characterizing and Identifying Socially Shared Self-Descriptions in Product Reviews"
            author = "Lu Sun, F Maxwell Harper, Chia-Jung Lee, Vanessa Murdock, Barbara Poblete"
            conference = "ICWSM 22: In Proceedings of the International AAAI Conference on Web and Social Media"
            abs=" 
            Online e-commerce product reviews can be highly influential in a customer's decision-making processes. Reviews often describe personal experiences with a product and provide candid opinions about a product's pros and cons. In some cases, reviewers choose to share information about themselves, just as they might do in social platforms. These descriptions are a valuable source of information about who finds a product most helpful. Customers benefit from key insights about a product from people with their same interests and sellers might use the information to better serve their customers needs. In this work, we present a comprehensive look into voluntary self-descriptive information found in public customer reviews. We analyzed what people share about themselves and how this contributes to their product opinions. We developed a taxonomy of types of self-descriptions, and a machine-learned classification model of reviews according to this taxonomy. We present new quantitative findings, and a thematic study of the perceived purpose descriptions in reviews."
            src={projectSD}
            pdfLink="https://ojs.aaai.org/index.php/ICWSM/article/view/22190"
            websiteLink=""
            tags={["personalization","communities identification", "classification model"]}
          />
        </div>
        <div>
          <ProjectsCard
            title="NewsGuesser: Using Curiosity to Reduce Selective Exposure"
            author = "Lu Sun, Hengyuan Zhang, Enze Liu, Mingyang Liu, Kristen Vaccaro"
            conference = "CSCW 24: Accepted at The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing"
            abs=" 
            Selective exposure has long been a concern of HCI researchers as it can lead to ideological polarization and
distrust in society. Efforts have tried to reduce selective exposure online by serving diversified news content,
but their effectiveness has been limited by users' lack of motivation to engage with the diverse content
offered. To address this, we design the NewsGuesser system, which leverages the insight that curiosity can
prompt motivation and engagement, by asking readers to guess the source of their news. In interviews with
40 participants, balanced for partisan affiliation, we use NewsGuesser as a probe tool to explore how guessing
affects their perceptions of selective exposure. Participants struggled with the guessing game, which revealed a
misalignment between users' expectations of different news sources and reality. Faced with the visualizations
of the (often inaccurate) guessing results, participants were able to reflect on their own biases and selective
exposure. In a number of cases, the guessing process changed participants' impressions of news organizations
and some expressed an interest in engaging with more diverse news sources. While many also found the
guessing game frustrating, the system and interview results suggest a number of new directions for designing
social media and news media platforms"
            src={projectNewsGuesser}
            pdfLink="http://kvaccaro.com.s3.amazonaws.com/documents/NewsGuesser.pdf"
            websiteLink=""
            tags={["filter bubble","selective exposure", "gamification"]}
          />
        </div>
        </div>
      </div>
      </div>

      <br></br>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-gray-200 text-darkColor font-bold rounded-t px-4 py-2">
         AI Model Co-creation
        </div>
        <div class="border border-t-0 border-grey-400 rounded-b bg-white0 px-4 py-3">
          <div className="w-full flex justify-center overflow-hidden rounded">
        </div>
        <div>
          <ProjectsCard
            title="Comparing Experts and Novices for AI Data Work: Insights on Allocating Human Intelligence to Design a Conversational Agent"
            author = "Lu Sun, Yuhan Liu, Grace Joseph, Zhou Yu, Haiyi Zhu, Steven P Dow"
            conference = "HCOMP 22: Proceedings of the AAAI Conference on Human Computation and Crowdsourcing"
            abs="We compared novices and experts in terms of performance and perceptions on human intelligence tasks in the context of designing a text-based conversational agent. 
            We developed a preliminary chatbot that simulates conversations with someone seeking mental health advice to help educate volunteer listeners at 7cups. com. 
            Novice crowds perform comparably to experts on tasks that only require natural language understanding, such as correcting how the system classifies a user statement. For more generative tasks, like creating new lines of chatbot dialogue, the experts demonstrated higher quality, novelty, and emotion. 
            We also uncovered a motivational gap: crowd workers enjoyed the interactive tasks, while experts found the work to be tedious and repetitive. We offer design considerations for allocating crowd workers and experts on input tasks for AI systems, and for better motivating experts to participate in low-level data work for AI."
            src={projectChatbot}
            pdfLink="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9Ojvi1sAAAAJ&sortby=pubdate&authuser=1&citation_for_view=9Ojvi1sAAAAJ:zYLM7Y9cAGgC"
            websiteLink=""
            tags={["AI data work","conversational agents", "AI model co-creation"]}
          />
        </div>
        </div>
      </div>
      </div>

      <br></br>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-gray-200 text-darkColor font-bold rounded-t px-4 py-2">
         Computational Social Science
        </div>
        <div class="border border-t-0 border-grey-400 rounded-b bg-white0 px-4 py-3">
          <div className="w-full flex justify-center overflow-hidden rounded">
        </div>
        <div>
          <ProjectsCard
            title="Multi-level Modeling of Social Roles in Online Micro-lending Platforms"
            author = "Lu Sun, Robert Kraut, Diyi Yang"
            conference = "CSCW 19: Proceedings of the ACM on Human-Computer Interaction (CSCW)"
            abs="Multi-level Modeling of Social Roles in Online Micro-lending Platforms"
            src={projectSocialRoles}
            pdfLink="https://dl.acm.org/doi/pdf/10.1145/3359235"
            websiteLink=""
            tags={["social roles","online micro lending platform", "social roles modeling"]}
          />
        </div>
        <div>
          <ProjectsCard
            title="Rare, but valuable: Understanding data-centered talk in news website comment sections"
            author = "Brian James McInnis, Lu Sun, Jungwon Shin, Steven P Dow"
            conference = "CSCW 20: Proceedings of the ACM on Human-Computer Interaction (CSCW)"
            abs="are, but valuable: Understanding data-centered talk in news website comment sections"
            src={projectDataTalk}
            pdfLink="https://dl.acm.org/doi/pdf/10.1145/3415245"
            websiteLink=""
            tags={["online discussion","data visualization", "data literacy"]}
          />
        </div>
        </div>
      </div>
      </div>


    </section>
  );
}

export default Projects