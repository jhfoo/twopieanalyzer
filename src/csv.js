export default {
  data: `
  Role,Product/ Process,Theme,Remarks
  DEV-PLAT,Integrator,TimeManagement,Time to complete is unpredictable
  DEV-PLAT,DBDeploy,Bureaucratic,Inconsistent process
  DEV-PLAT,DBDeploy,BadDocumentation,Unclear steps
  DEV-PLAT,CodeReview,Ineffective,No code appreciation
  DEV-PLAT,CrossTeamInteraction,FewOpportunities,Learn outside the team
  DEV-PLAT,TeamStability,Unstable,Attrition/ re-org
  DEV-PLAT,DevLanguage,FewOpportunities,Wants to learn CSS
  DEV-PLAT,InHouseProducts,Ineffective,Old way of solving engineering problems
  DEV-PLAT,Budget,Ineffective,Cost cutting
  DEV-PLAT,CrossTeamInteraction,FewOpportunities,bubble in bubble
  DEV-PLAT,CrossTeamInteraction,Ineffective,communication between teams
  DEV-PLAT,TeamStability,Unstable,Layoffs
  DEV-PLAT,TechDebt,Insurmountable,
  DEV-PLAT,Productivity,Ineffective,Pinged for work they know nothing about
  DEV-PLAT,LeadershipAlignment,NotAligned,See value of having mono repo
  DEV-PLAT,LeadershipAlignment,Optimism,Jaded
  DEV-PLAT,LeadershipAlignment,Optimism,Transparency and layoffs
  DEV-PLAT,LeadershipAlignment,NotAligned,Poor communication
  DEV-SC,PhpMonorepo,Unknown,
  DEV-SC,CD,Ineffective,Not mature
  DEV-SC,Decoupling,NotAligned,Doubts with new complexities and constant changes
  DEV-SC,Documentation,BadDocumentation,
  DEV-SC,Decoupling,Optimism,Toolchain and process doubts
  DEV-SC,Availability,Unstable,Poor SLAs
  DEV-SF,Buildkite,Ineffective,Insights into how to troubleshoot pipelines
  DEV-SF,Buildkite,Optimism,Low
  DEV-SF,Decoupling,BadDocumentation,Comprehensive end-end docs
  DEV-SF,Decoupling,Optimism,Lots of monolith code
  DEV-SF,Testing,BadAutomation,Toil
  DEV-SF,CD,Optimism,Also performance
  DEV-SF,CD,NotAligned,Devs have to understand build process
  DEV-CLOG,MicroService,BadDocumentation,Lack of design patterns
  DEV-CLOG,TechGuidance,Bureaucratic,Library vs microservice to interface with DB
  DEV-CLOG,TechGuidance,BadDocumentation,Confusion over interfacing data stores
  DEV-CLOG,TechGuidance,Unstable,Working through design principles and stds
  DEV-CLOG,Confluence,Unknown,
  DEV-CLOG,Decoupling,Optimism,Fear of rolling back efforts
  DEV-CLOG,LeadershipAlignment,NotAligned,More autonomy in solutionings
  DEV-CLOG,Decoupling,FewOpportunities,Want more guidance
  DEV-ATCI,DevLanguage,BadDocumentation,No Java onboarding
  DEV-ATCI,Decoupling,BadDocumentation,Tutorial avail
  DEV-ATCI,InfraProcess,Bureaucratic,Pain getting SSL
  DEV-ATCI,CD,Unstable,Unplanned outages
  DEV-ATCI,CD,Optimism,Thought it went out but it didn't
  DEV-ATCI,CodeReview,Ineffective,In PHP cannot get full context from changed files
  DEV-ATCI,Productivity,Ineffective,Meetings
  DEV-ATCI,LeadershipAlignment,NotAligned,Conflicting priorities between business and platform
  DEV-ATCI,GCP,Optimism,Running it in the cloud for WayDay
  DEV-ATCI,Decoupling,FewOpportunities,More guidance: right app size
  DEV-ATCI,GCP,NotAligned,Customer experience routing to DCs
  DEV-ATCI,LeadershipAlignment,BigPicture,Wayfair's businesss end-end 
  DEV-ATCI,Decoupling,BadDocumentation,Onboarding info
  DEV-ATCI,MonitorAlert,FewOpportunities,Needs standardization
  DEV-ATCI,LeadershipAlignment,Unstable,Long term tech CTO
  DEV-PLAT,DevEnv,Ineffective,Slow
  DEV-PLAT,TechGuidance,PoorSupport,general ops support
  DEV-PLAT,Decoupling,Optimism,Consistent experience end-end
  DEV-PLAT,Testing,Ineffective,Fail even there are no tests
  DEV-PLAT,Testing,Optimism,No strong signals to indicate actual safety
  DEV-PLAT,Testing,Ineffective,Need to mandate for new features
  DEV-PLAT,Decoupling,MissingFeature,Canary
  DEV-SF,DevEnv,Unstable,Flaky
  DEV-PLAT,DevEnv,Optimism,No idea why things break
  DEV-PLAT,Decoupling,Ineffective,Old tooling
  DEV-PLAT,Testing,TimeManagement,Too many tests to write
  DEV-PLAT,Productivity,Ineffective,Cannot access app in docker in conf room
  DEV-PLAT,Buildkite,TimeManagement,Struggle with pipelines
  DEV-PLAT,Ownership,NotAligned,If have to to everything on their own they won't do it
  DEV-PLAT,Buildkite,Optimism,Can use a checker to validate pipeline is correct
  DEV-PLAT,Decoupling,MissingFeature,Canary
  DEV-SF,TechGuidance,Guidance,More design patterns
  DEV-SF,Testing,Performance,Unit test run times long
  DEV-SF,Testing,Guidance,Difficult to get started
  DEV-SF,CrossTeamInteraction,NotAligned,Working relationship between QA and FE
  DEV-SF,Documentation,FewOpportunities,Tribal knowledge building; no doc on past changes in team
  DEV-SF,TechGuidance,Ineffective,education is great but sometimes need to enforce things with standards
  DEV-SF,TechGuidance,Ineffective,Education tooling
  DEV-ATCI,Documentation,Ineffective,Late discovery on dependencies in dev/ prod
  DEV-ATCI,Testing,Performance,Takes forever for full pipeline test
  DEV-ATCI,Kubernetes,MissingFeature,Wants certain things implemented
  DEV-ATCI,MicroService,FewOpportunities,Not enough education
  DEV-ATCI,MicroService,Optimism,Huge diff between owning pages and owning m/s
  DEV-ATCI,Kubernetes,PoorSupport,"k8s team spread thin, local experts handling qns, too many basic qns"
  DEV-ATCI,MicroService,Ineffective,Too much specificity 
  DEV-ATCI,Kubernetes,Unstable,Underlying network issues; timeouts without responding requests on service
  DEV-ATCI,TechGuidance,Ineffective,Cluster mgt needs snr tech
  DEV-ATCI,MicroService,Guidance,Need a paradigm between super constrained monolith and super granular m/s
  DEV-ATCI,Kubernetes,Guidance,Better accessibility and education
  DEV-SF,Culture,NotAligned,Need to make big change for promotion
  DEV-SF,Culture,TimeManagement,Volume of change
  DEV-SF,MicroService,NotAligned,Everything is m/s
  DEV-SF,Database,Ineffective,Why not just mock DBs?
  DEV-SF,DevEnv,Ineffective,No need to copy all 6 mil products; subsets are fine
  DEV-SF,Kubernetes,Ineffective,Allow snapshots
  DEV-SF,Productivity,Ineffective,ACLs are convoluted
  DEV-SF,Productivity,Ineffective,Access request process/ tool is terrible
  DEV-SF,Culture,Optimism,Need to clean up old code
  DEV-SF,Integrator,Unstable,Final step is very unstable
  DEV-SF,Integrator,Optimism,Not sure if going to production (avg wait 6 hours)
  DEV-SF,CrossTeamInteraction,Ineffective,We as an org don't communicate properly at all
  DEV-SF,ReleaseNotes,Ineffective,There is no context
  DEV-SF,CrossTeamInteraction,Ineffective,People keep duplicating work
  DEV-SF,Documentation,Optimism,Getting information is hard
  DEV-SF,Ownership,Optimism,No clear ownership
  DEV-SC,Infrastructure,NotAligned,Too much gatekeeping
  DEV-SC,Productivity,Ineffective,More self service tools
  DEV-SC,TechGuidance,Documentation,"Consistency, standards, write things down"
  DEV-SC,MonitorAlert,Ineffective,Systems don't have monitoring
  DEV-SC,TechGuidance,Documentation,"How to set up PagerDuty, fully support testing"
  DEV-ATCI,Database,Churn,Hard to track DB columns getting deprecated
  DEV-ATCI,CrossTeamInteraction,Documentation,How to find ext service docs?
  DEV-ATCI,CrossTeamInteraction,Communication,How to know when dependent endpoints are deprecated?
  DEV-ATCI,MicroService,Guidance,How to handle dependencies on shared libraries?
  DEV-ATCI,Testing,Performance,Unit tests take less time on decoupled
  DEV-CLOG,TechGuidance,Guidance,Lack of std for env; every team has their own style
  DEV-CLOG,Culture,NotAligned,Incentivises pushing features than growing team
  DEV-CLOG,Python,Guidance,Lack of standards
  DEV-CLOG,Decoupling,Guidance,More training will be helpful
  DEV-SF,Decoupling,Priority,Checkout is years away 
  DEV-SF,CodeReview,Ineffective,Need PHP reviewer for front-end change
  DEV-SF,DevEnv,Unstable,Restart turbine daily
  DEV-SF,CrossTeamInteraction,Ineffective,Involved when non-related code breaks in mono repo
  DEV-SF,Decoupling,NotAligned,Some people push back on decoupling alignment
  DEV-SF,Testing,Guidance,Education on QA on decoupled
  DEV-SF,Documentation,Ineffective,Need basic docs for dev VM sharing (avail are tips and tricks)
  DEV-SF,Productivity,Ineffective,Engineering collab tools
  DEV-SF,Slack,Ineffective,Cannot editing files together on screen share
  DEV-SF,TechGuidance,Guidance,Establish code standards
  DEV-SF,LeadershipAlignment,Guidance,Set engineers up for success: leads to help identify gaps
  DEV-SF,Ownership,Ineffective,Need more accountability
  DEV-SF,LeadershipAlignment,Optimism,Be more scientific
  DEV-SF,Documentation,Guidance,Gold standard reference repo
  DEV-SF,Documentation,Documentation,One place on how to do anything
`
}