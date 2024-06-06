export default function Page() {
  return (
    <div className="Frontpage w-96 h-96 bg-stone-950 flex-col justify-start items-center inline-flex">
      <div className="SectionHero self-stretch h-96 flex-col justify-center items-start gap-4 flex">
        <div className="ImageWrapper w-96 h-96 relative">
          <img
            className="Image w-96 h-96 left-[494px] top-[14px] absolute mix-blend-lighten"
            src="https://via.placeholder.com/880x769"
          />
          <div className="Grid left-[453px] top-[659px] absolute flex-col justify-start items-center gap-12 inline-flex">
            <div className="Grid flex-col justify-start items-center gap-4 flex">
              <div className="WebDesignerDeveloper text-center">
                <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
                  Web Designer <br />
                </span>
                <span style="text-orange-200 text-9xl font-light font-['Gambetta'] leading-10">
                  & Developer
                </span>
              </div>
              <div className="PremiumWebDesignDevelopmentAndSeoServicesToHelpYourBusinessStandOut w-96 text-center text-orange-200/opacity-60 text-2xl font-light font-['Chillax'] leading-9">
                Premium web design, development, and SEO services to help your
                business stand out.
              </div>
            </div>
            <div className="Grid justify-start items-center gap-4 inline-flex">
              <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                <div className="PhArrowDownLight w-5 h-5 px-1 py-0.5 justify-center items-center inline-flex" />
              </div>
              <div className="MyServices text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                My Services
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Header pl-6 pr-3 py-3 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl justify-center items-center gap-8 inline-flex">
        <div className="Frame237 justify-start items-center gap-4 flex">
          <div className="Logo w-14 h-5 px-px py-px justify-center items-center flex" />
        </div>
        <div className="NavbarRight justify-start items-center gap-4 flex">
          <div className="NavbarMenu justify-start items-start gap-5 flex">
            <div className="Services text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Services
            </div>
            <div className="Work text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Work
            </div>
            <div className="About text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              About
            </div>
            <div className="Blog text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Blog
            </div>
            <div className="NavbarMenuItem justify-start items-center flex">
              <div className="Pages text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                Pages
              </div>
              <div className="RiArrowDropDownLine w-4 h-4 px-1.5 justify-center items-center flex" />
            </div>
          </div>
          <div className="Button px-4 py-2.5 bg-orange-200 rounded-sm justify-center items-center gap-2 flex">
            <div className="Button text-stone-950 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
          </div>
        </div>
      </div>
      <div className="SectionLogos self-stretch h-40 px-16 pt-32 flex-col justify-start items-center gap-8 flex">
        <div className="Container w-96 h-9 flex-col justify-between items-start flex">
          <div className="Grid self-stretch justify-between items-center inline-flex">
            <div className="Logo w-24 h-6 px-0.5 py-0.5 justify-center items-center flex" />
            <div className="Logo w-36 h-7 relative" />
            <div className="Logo w-14 h-9 relative" />
            <div className="Logo w-20 h-7 relative" />
            <div className="Logo w-36 h-5 pl-px pr-0.5 py-0.5 justify-center items-center flex" />
            <div className="Logo w-9 h-7 py-px justify-center items-center flex" />
          </div>
        </div>
      </div>
      <div className="SectionServices h-96 px-16 pt-20 flex-col justify-start items-center gap-4 flex">
        <div className="Container h-80 flex-col justify-start items-center gap-16 flex">
          <div className="Grid self-stretch h-80 justify-start items-start gap-8 inline-flex">
            <div className="Card grow shrink basis-0 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 inline-flex">
              <div className="Grid self-stretch h-36 flex-col justify-start items-start gap-2 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className=" text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    01
                  </div>
                  <div className="WebDesign w-80 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Web design
                  </div>
                </div>
                <div className="VisuallyStunningWebDesignsThatCaptivateYourAudienceByBlendingYourBrandVoiceAndCustomerNeeds w-80 text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Visually stunning web designs that captivate your audience by
                  blending your brand voice and customer needs.
                </div>
              </div>
              <div className="ButtonText justify-start items-center gap-3 inline-flex">
                <div className="ButtonTextIcon w-8 h-8 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl justify-center items-center gap-8 flex">
                  <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
                </div>
                <div className="ButtonText text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  About Webdesign
                </div>
              </div>
            </div>
            <div className="Card grow shrink basis-0 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 inline-flex">
              <div className="Grid self-stretch h-36 flex-col justify-start items-start gap-2 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className=" text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    02
                  </div>
                  <div className="Development w-80 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Development
                  </div>
                </div>
                <div className="GetCustomWebDevelopmentSolutionsThatAreTailoredToYourSpecificationsDesignedToDeliverAFlawlessUserExperience self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Get custom web development solutions that are tailored to your
                  specifications, designed to deliver a flawless user
                  experience.
                </div>
              </div>
              <div className="ButtonText justify-start items-center gap-3 inline-flex">
                <div className="ButtonTextIcon w-8 h-8 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl justify-center items-center gap-8 flex">
                  <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
                </div>
                <div className="ButtonText text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  About Webflow
                </div>
              </div>
            </div>
            <div className="Card grow shrink basis-0 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 inline-flex">
              <div className="Grid self-stretch h-36 flex-col justify-start items-start gap-2 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className=" text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    03
                  </div>
                  <div className="ContentSeo w-80 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Content & Seo
                  </div>
                </div>
                <div className="ProvenSeoStrategiesThatEnhanceYourOnlinePerformanceBringingYouToTheForefrontOfOrganicSearchResults w-80 text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Proven SEO strategies that enhance your online performance,
                  bringing you to the forefront of organic search results.
                </div>
              </div>
              <div className="ButtonText justify-start items-center gap-3 inline-flex">
                <div className="ButtonTextIcon w-8 h-8 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl justify-center items-center gap-8 flex">
                  <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
                </div>
                <div className="ButtonText text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  About SEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionWork self-stretch px-16 pt-40 justify-center items-start gap-16 inline-flex">
        <div className="Container w-96 flex-col justify-start items-center inline-flex">
          <div className="Grid self-stretch px-8 pb-8 rounded-2xl justify-between items-center inline-flex">
            <div className="SelectedWork">
              <span style="text-orange-200 text-6xl font-light font-['Satoshi'] leading-10">
                Selected
              </span>
              <span style="text-orange-200 text-5xl font-light font-['Satoshi'] leading-10">
                {" "}
              </span>
              <span style="text-orange-200 text-6xl font-light font-['Gambetta'] leading-10">
                Work
              </span>
            </div>
            <div className="ButtonText justify-start items-center gap-3 flex">
              <div className="ButtonTextIcon w-8 h-8 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl justify-center items-center gap-8 flex">
                <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
              </div>
              <div className="ButtonText text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                See all
              </div>
            </div>
          </div>
          <div className="Grid flex-col justify-start items-start gap-8 flex">
            <div className="Grid w-96 justify-start items-start gap-8 inline-flex">
              <div className="Grid grow shrink basis-0 rounded-sm flex-col justify-start items-start gap-4 inline-flex">
                <div className="ImageWrapper w-96 h-96 relative rounded-sm border border-orange-200/opacity-20">
                  <img
                    className="Image w-96 h-96 left-0 top-0 absolute"
                    src="https://via.placeholder.com/684x513"
                  />
                  <img
                    className="Noise w-96 h-96 left-0 top-0 absolute opacity-10"
                    src="https://via.placeholder.com/684x513"
                  />
                  <div className="Grid w-96 px-4 py-3 left-[32px] top-[426px] absolute bg-white/opacity-5 rounded-sm border border-white/opacity-20 backdrop-blur-xl justify-between items-center inline-flex">
                    <div className="Space text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      Space
                    </div>
                    <div className="Webdesign text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Webdesign
                    </div>
                  </div>
                  <div className="Badge w-11 h-11 px-3 py-2 left-[319px] top-[234px] absolute bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhArrowUpRightLight w-5 h-5 px-1 py-1 justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="Grid grow shrink basis-0 rounded-sm flex-col justify-start items-start gap-4 inline-flex">
                <div className="ImageWrapper w-96 h-96 relative rounded-sm border border-orange-200/opacity-20">
                  <img
                    className="Image w-96 h-96 left-0 top-0 absolute"
                    src="https://via.placeholder.com/684x513"
                  />
                  <img
                    className="Noise w-96 h-96 left-0 top-0 absolute opacity-10"
                    src="https://via.placeholder.com/684x513"
                  />
                  <div className="Grid w-96 px-4 py-3 left-[32px] top-[426px] absolute bg-white/opacity-5 rounded-sm border border-white/opacity-20 backdrop-blur-xl justify-between items-center inline-flex">
                    <div className="Nova text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      Nova
                    </div>
                    <div className="Webdesign text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Webdesign
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid w-96 justify-start items-start gap-8 inline-flex">
              <div className="Grid grow shrink basis-0 rounded-sm flex-col justify-start items-start gap-4 inline-flex">
                <div className="ImageWrapper w-96 h-96 relative rounded-sm border border-orange-200/opacity-20">
                  <img
                    className="Image w-96 h-96 left-0 top-0 absolute"
                    src="https://via.placeholder.com/684x513"
                  />
                  <img
                    className="Noise w-96 h-96 left-0 top-[-0px] absolute opacity-10"
                    src="https://via.placeholder.com/684x513"
                  />
                  <div className="Grid w-96 px-4 py-3 left-[32px] top-[426px] absolute bg-white/opacity-5 rounded-sm border border-white/opacity-20 backdrop-blur-xl justify-between items-center inline-flex">
                    <div className="Sonic text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      Sonic
                    </div>
                    <div className="Webdesign text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Webdesign
                    </div>
                  </div>
                </div>
              </div>
              <div className="Grid grow shrink basis-0 rounded-sm flex-col justify-start items-start gap-4 inline-flex">
                <div className="ImageWrapper w-96 h-96 relative rounded-sm border border-orange-200/opacity-20">
                  <img
                    className="Image w-96 h-96 left-0 top-0 absolute"
                    src="https://via.placeholder.com/684x513"
                  />
                  <img
                    className="Noise w-96 h-96 left-0 top-[-0px] absolute opacity-10"
                    src="https://via.placeholder.com/684x513"
                  />
                  <div className="Grid w-96 px-4 py-3 left-[32px] top-[426px] absolute bg-white/opacity-5 rounded-sm border border-white/opacity-20 backdrop-blur-xl justify-between items-center inline-flex">
                    <div className="Solar text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      Solar
                    </div>
                    <div className="Webdesign text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Webdesign
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionProcess h-96 px-16 pt-40 flex-col justify-start items-center gap-4 flex">
        <div className="Grid flex-col justify-start items-center gap-12 flex">
          <div className="Grid flex-col justify-start items-center gap-4 flex">
            <div className="TheProcess text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              THe PRocess
            </div>
            <div className="YourWebsiteIn5Steps text-center">
              <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
                Your Website
                <br />
              </span>
              <span style="text-orange-200 text-9xl font-light font-['Gambetta'] leading-10">
                in 5 steps
              </span>
            </div>
            <div className="OurProcessEnsuresThatWeCreateAWebsiteTailoredToYourBusinessNeeds w-96 text-center text-orange-200/opacity-60 text-xl font-normal font-['Chillax'] leading-9">
              Our process ensures that we create a website tailored to your
              business needs.
            </div>
          </div>
          <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
            <div className="PhArrowDownLight w-5 h-5 px-1 py-0.5 justify-center items-center inline-flex" />
          </div>
        </div>
        <div className="Line w-px h-24 bg-orange-200/opacity-20" />
      </div>
      <div className="SectionProcess h-96 px-16 flex-col justify-start items-center gap-4 flex">
        <div className="Container h-96 flex-col justify-start items-start flex">
          <div className="Grid self-stretch justify-start items-start gap-20 inline-flex">
            <div className="Grid grow shrink basis-0 self-stretch" />
            <div className="Grid self-stretch flex-col justify-start items-center gap-4 inline-flex">
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
              <div className="Badge w-10 h-10 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className=" self-stretch text-center text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  01
                </div>
              </div>
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
            </div>
            <div className="Card grow shrink basis-0 self-stretch p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Label p-2 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className="Label text-orange-200 text-xs font-normal font-['Chillax'] uppercase leading-none">
                  2 Hours
                </div>
              </div>
              <div className="Grid self-stretch h-48 flex-col justify-start items-start gap-4 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className="DoWeMatch text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    Do we Match?
                  </div>
                  <div className="DiscoveryCall w-96 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Discovery Call
                  </div>
                </div>
                <div className="BeforeWeStartWeDetermineIfAndHowICanHelpYouWhatAreYourRequirementsForYourNewWebsiteWhyDoYouNeedANewWebsiteWhatGoalsDoYouHaveAndWhatProblemsCanWeSolveWithANewWebsite self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Before we start, we determine if and how I can help you. What
                  are your requirements for your new website? Why do you need a
                  new website? What goals do you have, and what problems can we
                  solve with a new website?
                </div>
              </div>
              <div className="List self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                <div className="Frame181 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="WeGetToKnowEachOtherBetter text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    We get to know each other better
                  </div>
                </div>
                <div className="Frame184 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="DetermineHowICanBestAssistYou text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Determine how I can best assist you
                  </div>
                </div>
                <div className="Frame185 self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="UnderstandTheGoalsYouHaveForYourWebsite text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Understand the goals you have for your website
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Grid self-stretch justify-start items-start gap-20 inline-flex">
            <div className="Card grow shrink basis-0 self-stretch p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Label p-2 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className="Label text-orange-200 text-xs font-normal font-['Chillax'] uppercase leading-none">
                  1 Week
                </div>
              </div>
              <div className="Grid self-stretch h-56 flex-col justify-start items-start gap-4 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className="LoremIpsum text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    lorem ipsum
                  </div>
                  <div className="ConceptStrategy w-96 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Concept & STrategy
                  </div>
                </div>
                <div className="TogetherWeDevelopAStrategyThatSuccessfullyCombinesYourGoalsWithTheNeedsOfYourTargetAudienceBasedOnThisConceptICreateTheFirstWireframesAndAnInteractivePrototypeThisProvidesUsWithAVeryGoodImpressionOfTheWebsiteAndTheUserInterface self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Together, we develop a strategy that successfully combines
                  your goals with the needs of your target audience. Based on
                  this concept, I create the first wireframes and an interactive
                  prototype. This provides us with a very good impression of the
                  website and the user interface.
                </div>
              </div>
              <div className="List self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                <div className="Frame181 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="UxDesign text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    UX Design
                  </div>
                </div>
                <div className="Frame184 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="Wireframes text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Wireframes
                  </div>
                </div>
                <div className="Frame185 self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="InteractivePrototype text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Interactive Prototype
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid self-stretch flex-col justify-start items-center gap-4 inline-flex">
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
              <div className="Badge w-10 h-10 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className=" text-center text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  02
                </div>
              </div>
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
            </div>
            <div className="Grid grow shrink basis-0 self-stretch" />
          </div>
          <div className="Grid self-stretch justify-start items-start gap-20 inline-flex">
            <div className="Grid grow shrink basis-0 self-stretch" />
            <div className="Grid self-stretch flex-col justify-start items-center gap-4 inline-flex">
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
              <div className="Badge w-10 h-10 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className=" text-center text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  03
                </div>
              </div>
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
            </div>
            <div className="Card grow shrink basis-0 self-stretch p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Label p-2 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className="Label text-orange-200 text-xs font-normal font-['Chillax'] uppercase leading-none">
                  1 week
                </div>
              </div>
              <div className="Grid self-stretch h-56 flex-col justify-start items-start gap-4 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className="SomeMagic text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    SOme MAgic
                  </div>
                  <div className="WebDesign w-96 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    web Design
                  </div>
                </div>
                <div className="NowComesTheMagicBasedOnThePreviouslyDevelopedConceptICreateAHighEndScreenDesignPerfectlyTailoredToYourBrandAWebDesignThatSetsYouApartFromYourCompetitionFitsYourTargetAudienceIdeallyAndProvidesAnExcellentUserExperience self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  Now comes the magic. Based on the previously developed
                  concept, I create a high-end screen design perfectly tailored
                  to your brand. A web design that sets you apart from your
                  competition, fits your target audience ideally, and provides
                  an excellent user experience.
                </div>
              </div>
              <div className="List self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                <div className="Frame181 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="HighEndWebDesignTailoredToYourBrand text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    High-end web design tailored to your brand
                  </div>
                </div>
                <div className="Frame184 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="InteractivePrototypeOfTheDesign text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Interactive prototype of the design
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Grid self-stretch justify-start items-start gap-20 inline-flex">
            <div className="Card grow shrink basis-0 self-stretch p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Label p-2 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className="Label text-orange-200 text-xs font-normal font-['Chillax'] uppercase leading-none">
                  2 Weeks
                </div>
              </div>
              <div className="Grid self-stretch h-48 flex-col justify-start items-start gap-4 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className="MoreMagic text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    More Magic
                  </div>
                  <div className="Development w-96 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    Development
                  </div>
                </div>
                <div className="InThisStepWeBreatheLifeIntoYourNewHighEndDesignYouWillReceiveACustomBuiltWebsiteUsingAModularWebDesignSystemAndCmsIntegrationAnimationsWillAddTheNecessaryFlairToYourSiteAndSetYouApartFromTheBoringCompetition self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  In this step, we breathe life into your new high-end design.
                  You will receive a custom-built website using a modular web
                  design system and CMS integration. Animations will add the
                  necessary flair to your site and set you apart from the boring
                  competition.
                </div>
              </div>
              <div className="List self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                <div className="Frame181 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="CustomFramerWebsite text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Custom framer website
                  </div>
                </div>
                <div className="Frame184 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="ModularWebDesignSystems text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Modular web design systems
                  </div>
                </div>
                <div className="Frame185 self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="CmsIntegration text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    CMS integration
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid self-stretch flex-col justify-start items-center gap-4 inline-flex">
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
              <div className="Badge w-10 h-10 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className=" text-center text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  04
                </div>
              </div>
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
            </div>
            <div className="Grid grow shrink basis-0 self-stretch" />
          </div>
          <div className="Grid self-stretch justify-start items-start gap-20 inline-flex">
            <div className="Grid grow shrink basis-0 self-stretch" />
            <div className="Grid self-stretch flex-col justify-start items-center gap-4 inline-flex">
              <div className="Line w-px grow shrink basis-0 bg-orange-200/opacity-20" />
              <div className="Badge w-10 h-10 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className=" text-center text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  05
                </div>
              </div>
              <div className="Line w-px grow shrink basis-0 bg-stone-950" />
            </div>
            <div className="Card grow shrink basis-0 self-stretch p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="Label p-2 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 flex">
                <div className="Label text-orange-200 text-xs font-normal font-['Chillax'] uppercase leading-none">
                  2 hours
                </div>
              </div>
              <div className="Grid self-stretch h-60 flex-col justify-start items-start gap-4 flex">
                <div className="Grid flex-col justify-start items-start gap-1 flex">
                  <div className="ReadyToGo text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    ready to go
                  </div>
                  <div className="WebsiteOnboarding w-96 text-orange-200 text-2xl font-light font-['Satoshi'] uppercase leading-loose tracking-wide">
                    WEbsite onboarding
                  </div>
                </div>
                <div className="InAPersonalFramerWorkshopIWillShowYouHowToMakeChangesToYourNewWebsiteQuicklyAndEasilyAdditionallyYouWillReceivePersonalizedFramerVideoTutorialsThatYouCanAccessAtAnyTimeEditYourFramerWebsiteWithoutAComplicatedBackendOrTheNeedForAnAdditionalProgrammerItSAsSimpleAsThat self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                  In a personal Framer workshop, I will show you how to make
                  changes to your new website quickly and easily. Additionally,
                  you will receive personalized Framer video tutorials that you
                  can access at any time. Edit your Framer website without a
                  complicated backend or the need for an additional programmer.
                  It&apos;s as simple as that.
                </div>
              </div>
              <div className="List self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                <div className="Frame181 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="PersonalWorkshop text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Personal workshop
                  </div>
                </div>
                <div className="Frame184 justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="PersonalizedVideoTutorials text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Personalized video tutorials
                  </div>
                </div>
                <div className="Frame185 self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="Ellipse1 w-1 h-1 bg-orange-200 rounded-full" />
                  <div className="EditTextAndImagesDirectlyOnYourWebsite text-orange-200 text-base font-normal font-['Chillax'] leading-7">
                    Edit text and images directly on your website
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionTestimonials self-stretch h-96 pt-40 flex-col justify-start items-center gap-16 flex">
        <div className="Container w-96 rounded-2xl justify-between items-end inline-flex">
          <div className="Grid grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
            <div className="WhatMyClientsSay w-96 text-center">
              <span style="text-orange-200 text-8xl font-light font-['Satoshi'] leading-10">
                What my
                <br />
              </span>
              <span style="text-orange-200 text-8xl font-light font-['Gambetta'] leading-10">
                clients say
              </span>
            </div>
            <div className="SeeWhatMyClientsHaveToSayAboutWorkingWithMeAndTheResultsIHelpedThemAchieve w-96 text-center text-orange-200/opacity-60 text-lg font-normal font-['Chillax'] leading-7">
              See what my clients have to say about working with me and the
              results I helped them achieve.
            </div>
          </div>
        </div>
        <div className="Container h-96 flex-col justify-start items-start gap-2.5 flex">
          <div className="Grid self-stretch justify-start items-start gap-8 inline-flex">
            <div className="Grid grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-start gap-8 flex">
                <div className="Grid self-stretch h-60 flex-col justify-start items-start gap-8 flex">
                  <div className="Logo w-7 h-5 relative" />
                  <div className="Grid self-stretch h-48 flex-col justify-start items-start gap-2 flex">
                    <div className="AmazingResultsWithArikSPremiumWebDesignServices self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      Amazing Results with Arik’s Premium Web Design Services.
                    </div>
                    <div className="ArikIsATopNotchWebDesignerWhoCreatedAStunningWebsiteForMyBusinessHeWasAttentiveToMyNeedsAndProvidedExcellentCustomerServiceThroughoutTheEntireProcessIHighlyRecommendHisServices self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                      Arik is a top-notch web designer who created a stunning
                      website for my business. He was attentive to my needs and
                      provided excellent customer service throughout the entire
                      process. I highly recommend his services.
                    </div>
                  </div>
                </div>
                <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="ImageWrapper rounded-full justify-center items-center flex">
                    <img
                      className="PexelsOlegPodlesnykh117854421 w-16 h-20"
                      src="https://via.placeholder.com/70x83"
                    />
                  </div>
                  <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="JohnSmith self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      John Smith
                    </div>
                    <div className="AbcCompany self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                      ABC Company
                    </div>
                  </div>
                </div>
              </div>
              <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-start gap-8 flex">
                <div className="Logo w-28 h-6 relative" />
                <div className="Grid self-stretch h-52 flex-col justify-start items-start gap-2 flex">
                  <div className="ProfessionalCollaborativeWebDesignExperienceWithArik self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                    Professional, Collaborative Web Design Experience with Arik.
                  </div>
                  <div className="IHadThePleasureOfWorkingWithArikOnAWebsiteDevelopmentProjectAndWasBlownAwayByHisExpertiseAndProfessionalismHeMadeTheProcessSeamlessAndDeliveredAWebsiteThatExceededOurExpectationsIHighlyRecommendArikForAllYourWebDevelopmentNeeds self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                    I had the pleasure of working with Arik on a website
                    development project and was blown away by his expertise and
                    professionalism. He made the process seamless and delivered
                    a website that exceeded our expectations. I highly recommend
                    Arik for all your web development needs.
                  </div>
                </div>
                <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="ImageWrapper w-14 h-14 relative rounded-full">
                    <img
                      className="Image w-14 h-14 left-0 top-0 absolute"
                      src="https://via.placeholder.com/60x60"
                    />
                    <img
                      className="PexelsElizavetaChayko73577891 w-16 h-28 left-[-5px] top-[-12px] absolute"
                      src="https://via.placeholder.com/70x105"
                    />
                  </div>
                  <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="KarenLee self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Karen Lee
                    </div>
                    <div className="RedwoodTechnologies self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                      Redwood Technologies
                    </div>
                  </div>
                </div>
              </div>
              <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-start gap-8 flex">
                <div className="Logo w-12 h-5 relative" />
                <div className="Grid self-stretch h-48 flex-col justify-start items-start gap-2 flex">
                  <div className="WebDesignAndContentSolutionsStandOutFromTheCrowd self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                    Web Design and Content Solutions: Stand Out from the Crowd.
                  </div>
                  <div className="ArikSSeoServicesHaveHelpedMyBusinessImproveItsOnlinePresenceAndIncreaseTrafficToOurWebsiteHeIsKnowledgeableProfessionalAndProvidesExcellentResultsIHighlyRecommendHimForAllYourSeoNeeds self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                    Arik&apos;s SEO services have helped my business improve its
                    online presence and increase traffic to our website. He is
                    knowledgeable, professional, and provides excellent results.
                    I highly recommend him for all your SEO needs.
                  </div>
                </div>
                <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="ImageWrapper w-14 h-14 relative rounded-full">
                    <img
                      className="Image w-14 h-14 left-0 top-0 absolute"
                      src="https://via.placeholder.com/60x60"
                    />
                    <img
                      className="PexelsAnastasiiaChaikovska120951311 w-24 h-32 left-[-18px] top-[-35px] absolute"
                      src="https://via.placeholder.com/90x135"
                    />
                  </div>
                  <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="EmilyDavis self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Emily Davis
                    </div>
                    <div className="GreenwayIndustries self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                      Greenway Industries
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 flex">
                <div className="Logo w-6 h-5 py-px justify-center items-center inline-flex" />
                <div className="Grid self-stretch h-52 flex-col justify-start items-start gap-2 flex">
                  <div className="ExpertWebflowAndSeoServicesExcellentWorkGreatResults self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                    Expert Webflow and SEO Services: Excellent Work, Great
                    Results.
                  </div>
                  <div className="WorkingWithArikOnMyWebsiteRedesignWasAFantasticExperienceHeWasAbleToTakeMyVisionAndTurnItIntoABeautifulAndFunctionalWebsiteHisAttentionToDetailAndCreativeApproachIsUnmatchedICouldnTBeHappierWithTheEndResult self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                    Working with Arik on my website redesign was a fantastic
                    experience. He was able to take my vision and turn it into a
                    beautiful and functional website. His attention to detail
                    and creative approach is unmatched. I couldn&apos;t be
                    happier with the end result.
                  </div>
                </div>
                <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="ImageWrapper w-14 h-14 relative rounded-full">
                    <img
                      className="Image w-14 h-14 left-0 top-0 absolute"
                      src="https://via.placeholder.com/60x60"
                    />
                    <img
                      className="PexelsDzianaHasanbekava71963441 w-14 h-24 left-0 top-[-5px] absolute"
                      src="https://via.placeholder.com/60x90"
                    />
                  </div>
                  <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="DavidKim self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      David Kim
                    </div>
                    <div className="DesignInc self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                      Design Inc.
                    </div>
                  </div>
                </div>
              </div>
              <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 rounded-sm border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 flex">
                <div className="Logo w-28 h-7 relative" />
                <div className="Grid self-stretch h-52 flex-col justify-start items-start gap-2 flex">
                  <div className="ExpertiseInWebDesignSecondToNoneWithArik self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                    Expertise in Web Design: Second to None with Arik.
                  </div>
                  <div className="ArikIsNotOnlyAnExceptionalWebDesignerButAlsoAPleasureToWorkWithHeTookTheTimeToUnderstandMyBusinessAndItsUniqueNeedsAndCreatedAWebsiteThatPerfectlyRepresentsMyBrandIHighlyRecommendArikSServicesToAnyoneLookingForATopQualityWebDesigner self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                    Arik is not only an exceptional web designer, but also a
                    pleasure to work with. He took the time to understand my
                    business and its unique needs, and created a website that
                    perfectly represents my brand. I highly recommend
                    Arik&apos;s services to anyone looking for a top-quality web
                    designer.
                  </div>
                </div>
                <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="ImageWrapper rounded-full justify-end items-center flex">
                    <img
                      className="PexelsZaidMohammed100514741 w-24 h-32"
                      src="https://via.placeholder.com/100x125"
                    />
                  </div>
                  <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                    <div className="AndrewThompson self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                      Andrew Thompson
                    </div>
                    <div className="SilverstoneCorporation self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                      Silverstone Corporation
                    </div>
                  </div>
                </div>
              </div>
              <div className="Grid self-stretch h-96 rounded-sm flex-col justify-start items-start gap-8 flex">
                <div className="Card self-stretch h-96 p-12 bg-orange-200/opacity-5 border border-orange-200/opacity-20 flex-col justify-center items-start gap-8 flex">
                  <div className="Logo w-20 h-5 pl-0.5 pr-px py-px justify-center items-center inline-flex" />
                  <div className="Grid self-stretch h-52 flex-col justify-start items-start gap-2 flex">
                    <div className="HighQualityWebDesignExceptionalAttentionToDetailWithArik self-stretch text-orange-200 text-2xl font-light font-['Satoshi'] leading-loose tracking-wide">
                      High-Quality Web Design: Exceptional Attention to Detail
                      with Arik.
                    </div>
                    <div className="ArikSDevelopmentServicesAreTopNotchHeIsAbleToTakeComplexIdeasAndTurnThemIntoFunctionalUserFriendlyWebsitesHisAttentionToDetailAndCommitmentToCustomerSatisfactionAreUnmatchedIHighlyRecommendArikForAllYourWebDevelopmentNeeds self-stretch text-orange-200/opacity-60 text-base font-normal font-['Chillax'] leading-7">
                      Arik&apos;s development services are top-notch. He is able
                      to take complex ideas and turn them into functional,
                      user-friendly websites. His attention to detail and
                      commitment to customer satisfaction are unmatched. I
                      highly recommend Arik for all your web development needs.
                    </div>
                  </div>
                  <div className="Grid self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="ImageWrapper w-14 h-14 relative rounded-full">
                      <img
                        className="Image w-14 h-14 left-0 top-0 absolute"
                        src="https://via.placeholder.com/60x60"
                      />
                      <img
                        className="PexelsRezaKargar124442921 w-16 h-28 left-[-3px] top-[-28px] absolute"
                        src="https://via.placeholder.com/70x105"
                      />
                    </div>
                    <div className="Grid grow shrink basis-0 flex-col justify-center items-start inline-flex">
                      <div className="RyanChen self-stretch text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                        Ryan Chen
                      </div>
                      <div className="GoldenGateSolutions self-stretch text-orange-200/opacity-60 text-sm font-light font-['Chillax'] leading-snug">
                        Golden Gate Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionAbout self-stretch h-96 flex-col justify-center items-start gap-4 flex">
        <div className="ImageWrapper w-96 h-96 relative">
          <img
            className="Image w-96 h-96 left-[494px] top-[29px] absolute mix-blend-lighten"
            src="https://via.placeholder.com/880x769"
          />
          <div className="ArikAndersson left-[-174px] top-[400px] absolute text-center">
            <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
              Arik
            </span>
            <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
              {" "}
            </span>
            <span style="text-orange-200 text-9xl font-light font-['Gambetta'] leading-10">
              Andersson
            </span>
          </div>
          <div className="ArikAndersson left-[1193px] top-[400px] absolute text-center">
            <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
              Arik
            </span>
            <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
              {" "}
            </span>
            <span style="text-orange-200 text-9xl font-light font-['Gambetta'] leading-10">
              Andersson
            </span>
          </div>
          <div className="Container w-96 left-[360px] top-[773px] absolute justify-start items-start gap-16 inline-flex">
            <div className="Grid justify-start items-start gap-16 flex">
              <div className="AWebsiteThatLeavesALastingImpression w-96">
                <span style="text-orange-200 text-5xl font-light font-['Satoshi'] leading-10">
                  A website that leaves <br />
                </span>
                <span style="text-orange-200 text-5xl font-light font-['Gambetta'] leading-10">
                  a lasting impression!
                </span>
              </div>
              <div className="Grid w-96 flex-col justify-start items-start gap-8 inline-flex">
                <div className="HiIMArikAnderssonAFreelancerSpecializingInPremiumWebDesignDevelopmentAndSeoServicesIMPassionateAboutCreatingUniqueAndEffectiveSolutionsForMyClientsAndIBringAPersonalTouchToEveryProjectLetSWorkTogetherToBringYourVisionToLife self-stretch text-orange-200/opacity-60 text-lg font-normal font-['Chillax'] leading-7">
                  Hi, I&apos;m Arik Andersson - a freelancer specializing in
                  premium web design, development, and SEO services. I&apos;m
                  passionate about creating unique and effective solutions for
                  my clients, and I bring a personal touch to every project.
                  Let&apos;s work together to bring your vision to life!
                </div>
                <div className="Grid justify-start items-start gap-2.5 inline-flex">
                  <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhTwitterLogoLight w-5 h-5 pl-0.5 pr-px pt-1 pb-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhInstagramLogoLight w-5 h-5 p-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhDribbbleLogoLight w-5 h-5 p-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhBehanceLogoLight w-5 h-5 pl-0.5 pr-px py-1 justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionCta self-stretch h-96 flex-col justify-start items-center flex">
        <div className="SectionBanner h-14 flex-col justify-start items-center flex">
          <div className="Line self-stretch h-px bg-orange-200/opacity-20" />
          <div className="Grid self-stretch py-4 bg-orange-200/opacity-10 rounded-sm justify-start items-start gap-8 inline-flex">
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
            <div className="LetSTalk text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Let’s talk
            </div>
            <div className=" text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              +++
            </div>
          </div>
          <div className="Line self-stretch h-px bg-orange-200/opacity-20" />
        </div>
        <div className="Grid self-stretch h-96 px-12 py-40 bg-orange-200/opacity-5 flex-col justify-start items-center gap-8 flex">
          <div className="Frame214 flex-col justify-start items-center gap-2 flex">
            <div className="ProjectInMind text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Project in mind?
            </div>
            <div className="LetSMakeYourWebsiteShine text-center">
              <span style="text-orange-200 text-9xl font-light font-['Satoshi'] leading-10">
                Let’s make your
                <br />
              </span>
              <span style="text-orange-200 text-9xl font-light font-['Gambetta'] leading-10">
                Website shine
              </span>
            </div>
            <div className="PremiumWebDesignWebflowAndSeoServicesToHelpYourBusinessStandOut w-96 text-center text-orange-200/opacity-60 text-xl font-normal font-['Chillax'] leading-9">
              Premium web design, webflow, and SEO services to help your
              business stand out.
            </div>
          </div>
          <div className="Button px-4 py-2.5 bg-orange-200 rounded-sm justify-center items-center gap-2 inline-flex">
            <div className="Button text-stone-950 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
              Get in touch
            </div>
            <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
          </div>
        </div>
      </div>
      <div className="Footer self-stretch h-96 px-4 py-16 bg-orange-200/opacity-5 flex-col justify-start items-center flex">
        <div className="Container h-96 flex-col justify-start items-start gap-20 flex">
          <div className="Grid self-stretch justify-start items-start gap-16 inline-flex">
            <div className="Column w-96 self-stretch rounded-2xl flex-col justify-between items-start inline-flex">
              <div className="Logo w-14 h-5 px-px py-px justify-center items-center inline-flex" />
              <div className="Grid flex-col justify-start items-start gap-4 flex">
                <div className="Grid justify-start items-center gap-4 inline-flex">
                  <div className="Badge w-9 h-9 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhInstagramLogoLight w-4 h-4 p-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Instagram text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    Instagram
                  </div>
                </div>
                <div className="Grid justify-start items-center gap-4 inline-flex">
                  <div className="Badge w-9 h-9 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhTwitterLogoLight w-4 h-4 pl-0.5 pr-px py-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Twitter text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    Twitter
                  </div>
                </div>
                <div className="Grid justify-start items-center gap-4 inline-flex">
                  <div className="Badge w-9 h-9 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhDribbbleLogoLight w-4 h-4 px-0.5 py-0.5 justify-center items-center inline-flex" />
                  </div>
                  <div className="Dribbble text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    Dribbble
                  </div>
                </div>
                <div className="Grid justify-start items-center gap-4 inline-flex">
                  <div className="Badge w-9 h-9 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                    <div className="PhBehanceLogoLight w-4 h-4 pl-0.5 pr-px py-1 justify-center items-center inline-flex" />
                  </div>
                  <div className="Behance text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                    Behance
                  </div>
                </div>
              </div>
            </div>
            <div className="Column grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="Pages self-stretch text-justify text-orange-200 text-xl font-light font-['Satoshi'] leading-7 tracking-wide">
                Pages
              </div>
              <div className="Nav self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                <div className="Home self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Home
                </div>
                <div className="Services self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Services
                </div>
                <div className="About self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  About
                </div>
                <div className="Contact self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Contact
                </div>
              </div>
              <div className="Button px-4 py-2.5 bg-orange-200 rounded-sm justify-start items-center gap-2 inline-flex">
                <div className="Button text-justify text-stone-950 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  More Templates
                </div>
                <div className="PhArrowUpRightLight w-4 h-4 p-1 justify-center items-center flex" />
              </div>
            </div>
            <div className="Column grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="Cms text-justify text-orange-200 text-xl font-light font-['Satoshi'] leading-7 tracking-wide">
                CMS
              </div>
              <div className="Nav self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                <div className="Work self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Work
                </div>
                <div className="WorkSingle self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Work Single
                </div>
                <div className="Blog self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Blog
                </div>
                <div className="BlogPost self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Blog Post
                </div>
              </div>
            </div>
            <div className="Column grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="UtilityPages text-justify text-orange-200 text-xl font-light font-['Satoshi'] leading-7 tracking-wide">
                Utility Pages
              </div>
              <div className="Nav self-stretch h-44 flex-col justify-start items-start gap-4 flex">
                <div className="ErrorPage self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  404 Error Page
                </div>
                <div className="PasswordProtected self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Password Protected
                </div>
                <div className="Styleguide self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Styleguide
                </div>
                <div className="Licensing self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Licensing
                </div>
                <div className="Changelog self-stretch text-justify text-orange-200/opacity-60 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                  Changelog
                </div>
              </div>
            </div>
          </div>
          <div className="Grid self-stretch rounded-2xl justify-start items-center gap-12 inline-flex">
            <div className="2022MadeByPawelGolaPoweredByFramer w-96 text-justify text-orange-200/opacity-60 text-xs font-normal font-['Chillax'] leading-snug tracking-wide">
              © 2022 Made by Pawel Gola. Powered by Framer..
            </div>
            <div className="Grid justify-start items-center gap-4 flex">
              <div className="ToTop text-justify text-orange-200 text-xs font-normal font-['Satoshi'] uppercase leading-tight tracking-wider">
                To Top
              </div>
              <div className="Badge w-11 h-11 px-3 py-2 bg-orange-200/opacity-5 rounded-full border border-orange-200/opacity-20 backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
                <div className="PhArrowUpLight w-5 h-5 px-1 py-0.5 justify-center items-center inline-flex" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
