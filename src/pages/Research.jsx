import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons';
const Research = () => {
  return (
    <div className="min-h-screen bg-slate-400 p-6">
     <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16">
        <div className="mb-6 bg-green-500 p-4 border-2 rounded border-gray-600 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-white">Research</h1>
          <a 
            href="https://www.researchgate.net/profile/Muhammad-Jawad-7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faResearchgate} size="2x" />
          </a>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Areas / Interests</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Manufacturing Processes</li>
            <li>Welding of Dissimilar Metals</li>
            <li>Casting</li> 
            <li>Conventional and Non-Conventional Machining</li>
            <li>Additive Manufacturing</li>
            <li>Advanced Manufacturing Technologies</li>
            <li>Smart and Digital Manufacturing in Industry 4.0</li>
            <li>Optimization of Manufacturing Processes</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Grants</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Optimization of Process Parameters in Gas Tungsten Arc Welding Process</h3>
              <p className="text-gray-700">MSc research project, funded by ASR & TD, UET Taxila</p>
              <p className="text-gray-700">Amount: Rs. 0.74 million PKR</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Welding Digitization in Industry 4.0</h3>
              <p className="text-gray-700">Co-principle investigator</p>
              <p className="text-gray-700">Funded by Higher Education Commission of Pakistan</p>
              <p className="text-gray-700">Amount: Rs. 7.8 million PKR, under National Research Program for Universities (NRPU)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Journal Articles</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-4">
            <li>
              <p className="font-semibold">Jawad, M., Jahanzaib, M., Ali, M. A., Hussain, S., Ahmad, W., & Ahmed, N. (2023).</p>
              <p className="italic">Improvement in mechanical and microstructural properties of novel TA7/Nb/Cu/SS304 composite joints by reducing intermetallic compounds.</p>
              <p>The International Journal of Advanced Manufacturing Technology, 1-18. (I.F 3.4)</p>
            </li>
            <li>
              <p className="font-semibold">Jawad, M., Ali, A., Ishfaq, K., Jahanzaib, M., & Sajid, M. (2023).</p>
              <p className="italic">Performance Evaluation of 70-30 Cu-Ni Filler Metal for Improving Dissimilar Al2024-SS304 Joints’ Efficiency: A Mechanical and Microstructural Investigation.</p>
              <p>Journal of Materials Engineering and Performance, 1-16. (I.F 2.3)</p>
            </li>
            <li>
              <p className="font-semibold">Ahmed, T., Jahanzaib, M., Ali, M. A., Raza, M. H., Jawad, M., & Zahoor, S. (2023).</p>
              <p className="italic">Safety climate in Pakistani universities’ laboratories: An assessment of individual factors.</p>
              <p>International Journal of Occupational Safety and Ergonomics, 1-20. (I.F 2.665)</p>
            </li>
            <li>
              <p className="font-semibold">Sajjad, Ahmad; Ahmad, Wasim; Hussain, Salman; Akbar, Bilal; Jahanzaib, Mirza; Sajid, Muhammad; Ali, Khurram; Jawad, Muhammad (2023).</p>
              <p className="italic">Assessment by Lean Modified Manufacturing Maturity Model for Industry 4.0: A Case Study of Pakistan's Manufacturing Sector.</p>
              <p>IEEE Transactions on Engineering Management. (I.F 8.702)</p>
            </li>
            <li>
              <p className="font-semibold">Jawad, M., Jahanzaib, M., & Ilyas, M. (2022).</p>
              <p className="italic">Evaluation of welded joints of dissimilar titanium alloy Ti-5Al-2.5 Sn and stainless-steel 304 at different multi-interlayer modes.</p>
              <p>Materials Research Express, 9(10), 106501. (I.F 2.025)</p>
            </li>
            <li>
              <p className="font-semibold">Hanif, M. W., Wasim, A., Sajid, M., Hussain, S., Jawad, M., & Jahanzaib, M. (2022).</p>
              <p className="italic">Evaluation of microstructure and mechanical properties of squeeze overcast Al7075− Cu composite joints.</p>
              <p>China Foundry, 1-11. (I.F 1.045)</p>
            </li>
            <li>
              <p className="font-semibold">Javid, H., Jahanzaib, M., Jawad, M., Ali, M. A., Farooq, M. U., Pruncu, C. I., & Hussain, S. (2021).</p>
              <p className="italic">Parametric analysis of turning HSLA steel under minimum quantity lubrication (MQL) and nanofluids-based minimum quantity lubrication (NF-MQL): a concept of one-step sustainable machining.</p>
              <p>The International Journal of Advanced Manufacturing Technology, 1-20. (I.F 3.32)</p>
            </li>
            <li>
              <p className="font-semibold">Jawad, M., Jahanzaib, M., Ali, M. A., Farooq, M. U., Mufti, N. A., Pruncu, C. I., ... & Wasim, A. (2021).</p>
              <p className="italic">Revealing the microstructure and mechanical attributes of pre-heated conditions for gas tungsten arc welded AISI 1045 steel joints.</p>
              <p>International Journal of Pressure Vessels and Piping, 104440. (I.F 2.56)</p>
            </li>
            <li>
              <p className="font-semibold">Ali, M. A., Ishfaq, K., & Jawad, M. (2019).</p>
              <p className="italic">Evaluation of surface quality and mechanical properties of squeeze casted AA2026 aluminum alloy using response surface methodology.</p>
              <p>The International Journal of Advanced Manufacturing Technology, 103(9), 4041-4054. (I.F 3.32)</p>
            </li>
            <li>
              <p className="font-semibold">Ishfaq, K., Ahmad, N., Jawad, M., Ali, M. A., & M Al-Ahmari, A. (2019).</p>
              <p className="italic">Evaluating material’s interaction in wire electrical discharge machining of stainless steel (304) for simultaneous optimization of conflicting responses.</p>
              <p>Materials, 12(12), 1940. (I.F 3.623)</p>
            </li>
            <li>
              <p className="font-semibold">Sarfraz, M. H., & Mirza Jahanzaib, M. Jawad. (2018).</p>
              <p className="italic">Multi-response optimization of process variables in squeeze casting of al 6063-sic composite.</p>
              <p>Applied Sciences, 15(2).</p>
            </li>
            <li>
              <p className="font-semibold">Ishfaq, K., Mufti, N. A., Jawad, M., Sajid, M., & Jahanzaib, M. (2018).</p>
              <p className="italic">Analysis of the effect of wire electric discharge machining process parameters on the formation of high speed steel form tool.</p>
              <p>Advances in Science and Technology. Research Journal, 12(1).</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conference Articles</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-4">
            <li>
              <p className="font-semibold">Khan, U., Ahmad, W., Sajjad, A., & Jawad, M. (2023).</p>
              <p className="italic">Preliminary Maturity Level Assessment of Industry 4.0 in the Context of Pakistani Industries.</p>
              <p>Engineering Proceedings, 45(1), 29.</p>
            </li>
            <li>
              <p className="font-semibold">Ali, A., Jawad, M., & Jahanzaib, M.</p>
              <p className="italic">Evaluation of microstructure and mechanical behavior of Aluminum 2024 and Stainless steel 304 GTAW joints.</p>
              <p>MATEC Web of Conferences (Vol. 381, p. 02007). EDP Sciences.</p>
            </li>
            <li>
              <p className="font-semibold">Asad Ali, Mirza Jahanzaib, Muhammad Jawad, and Amar ul Hassan (2022).</p>
              <p className="italic">Finite Element Modeling of Residual Stress and Distortion in Dissimilar TIG Welded Joints of Aluminum 2024 and Stainless Steel 304.</p>
              <p>5th Pak-Turk International Conference on Emerging Technologies in the field of Sciences and Engineering, p. 23-30.</p>
            </li>
            <li>
              <p className="font-semibold">Muhammad Jawad, Hassan Javid, and Mirza Jahanzaib (2022).</p>
              <p className="italic">Multiple response optimization of process parameters during machining of High Strength Low Alloy Steel using Taguchi based Grey Relational Analysis.</p>
              <p>Proceedings of International Conference on Mechanical Engineering (ICME-2022), p. 558-565.</p>
            </li>
            <li>
              <p className="font-semibold">M Hassan Shafiq, Mirza Jahanzaib, and Muhammad Jawad (2022).</p>
              <p className="italic">Integrated Management System (Case Study): Reviewing the Manufacturing Industry at Technology Readiness Index.</p>
              <p>Proceedings of International Conference on Mechanical Engineering (ICME-2022), p. 566-575.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Research;
