import React from 'react'
import Title from '../layouts/Title'
import { ImFilePdf } from "react-icons/im";


const Publication = () => {
  return (
    <section
      id="publication"
      className="w-full py-10 border-b-[1px] border-b-black">
      <div className="flex justify-left items-center text-left py-4">
      <Title title="Publication">
      </Title>
      </div>
      <div className="grid grid-cols-1 gap-4 px-8">
      <div> 
        <div className="w-full p-4 xl:px-6 h-auto xl:py-6 flex group gap-6">
        <ul className="list-decimal">
            <li>
              <div className="font-medium">MetaWriter: Exploring the Potential and Perils of AI Writing Support in Scientific Peer Review</div>
              <div><span className="text-designColor">Lu Sun</span>, Stone Tao, Junjie Hu, and Steven P. Dow</div>
              <div><span className="font-medium">CSCW'24</span>: Accepted at The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              {/* <a href=""> */}
                <ImFilePdf />
                {/* </a> */}
              </span>
            </li>

            <li>
              <div className="font-medium">NewsGuesser: Using Curiosity to reduce selective exposure</div>
              <div><span className="text-designColor">Lu Sun</span>, Hengyuan Zhang, Enze Liu, Mingyang Liu, and Kristen Vaccaro</div>
              <div><span className="font-medium">CSCW'24</span>: Accepted at The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="http://kvaccaro.com.s3.amazonaws.com/documents/NewsGuesser.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Rhythm of Work: Mixed-methods Characterization of Information Workers Scheduling Preferences and Practices</div>
              <div><span className="text-designColor">Lu Sun</span>, Lillio Mok, Shilad Sen, Bahar Sarrafzadeh</div>
              <div><span className="font-medium">CSCW'24</span>: Under revision at The 26th ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://arxiv.org/pdf/2309.08104.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Characterizing and Identifying Socially Shared Self-Descriptions in Product Reviews</div>
              <div><span className="text-designColor">Lu Sun</span>, Chia-Jung Lee, Vanessa Murdock, Barbara Poblete and Max Harper</div>
              <div><span className="font-medium">ICWSM'23</span>: In Proceedings of the International AAAI Conference on Web and Social Media</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://ojs.aaai.org/index.php/ICWSM/article/view/22190" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Challenging but Connective: Large-Scale Characteristics of Synchronous Collaboration Across Time Zones</div>
              <div>Lillio Mok, <span className="text-designColor">Lu Sun</span>, Shilad Sen, Bahareh Sarrafzadeh</div>
              <div><span className="font-medium">CHI'23</span>: In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://www.cs.toronto.edu/~lillio/papers/chi2023_xtz.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Understanding the Viability of Email Origin Indicators for Identifying the Sender</div>
              <div>Enze Liu, <span className="text-designColor">Lu Sun</span>, Alex Bellon, Grant Ho, Geoffrey M. Voelker, Stefan Savage, Imani N. S. Munyaka</div>
              <div><span className="font-medium">SOUPS'23</span>: In Proceedings of the 19th Symposium on Usable Privacy and Security </div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://www.usenix.org/system/files/soups2023-liu.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Comparing Experts and Novices for AI Data Work: Insights on Allocating Human Intelligence to Design a Conversational Agent</div>
              <div><span className="text-designColor">Lu Sun</span>, Yuhan Liu, Grace Joseph, Zhou Yu, Haiyi Zhu, Steven P. Dow</div>
              <div><span className="font-medium">HCOMP'22</span>: In Proceedings of the AAAI Conference on Human Computation and Crowdsourcing </div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://ojs.aaai.org/index.php/HCOMP/article/view/21999" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Reporting the Community Beat: Practices for Moderating Online Discussion at a News Website</div>
              <div>Brian McInnis, Leah Ajmani, <span className="text-designColor">Lu Sun</span>, Krystal Zeng, Yvonne Hou, Steven P. Dow</div>
              <div><span className="font-medium">CSCW'21</span><span className="text-red-500">(Impact Recognition Award)</span>: In Proceedings of The 24th ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://dl.acm.org/doi/pdf/10.1145/3476074" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Rare, but valuable: Understanding data-centered talk in news website comment sections</div>
              <div>Brian McInnis, <span className="text-designColor">Lu Sun</span>, Jungwon Shin, Steven P. Dow</div>
              <div><span className="font-medium">CSCW'20</span>: In Proceedings of The 23rd ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://dl.acm.org/doi/pdf/10.1145/3415245" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Multi-level Modeling of Social Roles in Online Micro-lending Platforms</div>
              <div><span className="text-designColor">Lu Sun</span>, Robert E. Kraut, Diyi Yang</div>
              <div><span className="font-medium">CSCW'20</span>: In Proceedings of The 23rd ACM Conference on Computer-Supported Cooperative Work and Social Computing</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://dl.acm.org/doi/pdf/10.1145/3359235" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">Using a Hierarchical Model to Get the Best of Both Worlds: Good Prediction and Good Explanation</div>
              <div>Kenneth Koedinger, <span className="text-designColor">Lu Sun</span>, Elizabeth A. McLaughlin</div>
              <div><span className="font-medium">EDM'18</span>: In Proceedings of the 11th International Conference on Educational Data Mining</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://www.cs.cmu.edu/~lus1/img/EDM18.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

            <li>
              <div className="font-medium">SkinMotion: what does skin movement tell us?</div>
              <div>Yuntao Wang, Ke Sun, <span className="text-designColor">Lu Sun</span>, Chun Yu, and Yuanchun Shi</div>
              <div><span className="font-medium">Ubicomp’ 16 ADJUNCT</span>: In Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing: Adjunct, pp. 914-917. ACM, 2016.</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://dl.acm.org/doi/abs/10.1145/2968219.2979132" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

          </ul>
        </div>
      </div>

      <div> <span className="font-bold">Preprint and workshop</span>
        <div className="w-full p-4 xl:px-6 h-auto xl:py-6 flex group gap-6">
        <ul className="list-decimal">
            <li>
              <div className="font-medium">Intelligent Scaffolding to Support a Workflow for Academic Peer Reviews</div>
              <div><span className="text-designColor">Lu Sun</span>, Aaron Chan, Yunseo Chang, Steven P. Dow</div>
              <div>Under Review, Anonymized title for Peer Review</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                <ImFilePdf />
                {/* </a> */}
              </span>
            </li>

            <li>
              <div className="font-medium">Designing interactions with AI to support the scientific peer review process</div>
              <div><span className="text-designColor">Lu Sun</span>, Stone Tao, Junjie Hu, and Steven P. Dow</div>
              <div><span className="font-medium">ICML 2023 Human-AI Workshop</span>: Presented at the Forty-first International Conference on Machine Learning AI and HCI Workshop</div>
              <span className="text-lg inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://github.com/helenavasc/AI_HCI_Workshop_ICML_2023/blob/b87ed234b42e8fecb5622fddea84d1e4f77c80fa/papers/DesignInteractionswithAItoScientificReview.pdf" target="_blank" rel="noopener noreferrer">
                <ImFilePdf /></a>
              </span>
            </li>

          </ul>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Publication