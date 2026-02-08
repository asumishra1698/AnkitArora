import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Compliances from "./pages/Compliances";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Home from "./pages/Home";
import NGO from "./pages/NGO";
import Privacy from "./pages/Privacy";
import StartBusiness from "./pages/StartBusiness";
import Trademark from "./pages/Trademark";
import CompanyRegistration from "./pages/CompanyRegistration";
import PrivateLimited from "./pages/PrivateLimited";
import PublicLimited from "./pages/PublicLimited";
import LLPRegistration from "./pages/LLPRegistration";
import OnePersonCompany from "./pages/OnePersonCompany";
import NidhiCompany from "./pages/NidhiCompany";
import ProducerCompany from "./pages/ProducerCompany";
import ForeignCompany from "./pages/ForeignCompany";
import PartnershipRegistration from "./pages/PartnershipRegistration";
import SoleProprietorship from "./pages/SoleProprietorship";
import GSTRegistration from "./pages/GSTRegistration";
import FSSAIRegistration from "./pages/FSSAIRegistration";
import ImportExportCode from "./pages/ImportExportCode";
import ISOCertification from "./pages/ISOCertification";
import RERARegistration from "./pages/RERARegistration";
import MSMEUdyam from "./pages/MSMEUdyam";
import ShopActRegistration from "./pages/ShopActRegistration";
import BusinessRegistrationNumber from "./pages/BusinessRegistrationNumber";
import StartupRegistration from "./pages/StartupRegistration";
import NGORegistration from "./pages/NGORegistration";
import Section8NPO from "./pages/Section8NPO";
import TrustRegistration from "./pages/TrustRegistration";
import SocietyRegistration from "./pages/SocietyRegistration";
import NGODarpan from "./pages/NGODarpan";
import FCRARegistration from "./pages/FCRARegistration";
import EightyGTwelveA from "./pages/EightyGTwelveA";
import CSR from "./pages/CSR";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import DesignRegistration from "./pages/DesignRegistration";
import PatentRegistration from "./pages/PatentRegistration";
import ITRFiling from "./pages/ITRFiling";
import GSTReturn from "./pages/GSTReturn";
import ROCFiling from "./pages/ROCFiling";
import TDSReturn from "./pages/TDSReturn";
import XBRLFiling from "./pages/XBRLFiling";
import GSTAudit from "./pages/GSTAudit";
import NGOAudit from "./pages/NGOAudit";
import TaxAudit from "./pages/TaxAudit";
import StockAudit from "./pages/StockAudit";
import StatutoryAudit from "./pages/StatutoryAudit";
import BankAudit from "./pages/BankAudit";
import GSTAdvisory from "./pages/GSTAdvisory";
import TaxPlanning from "./pages/TaxPlanning";
import LegalSecretarial from "./pages/LegalSecretarial";
import ProjectFinancing from "./pages/ProjectFinancing";
import NRITaxation from "./pages/NRITaxation";
import StrikeOffSection8 from "./pages/StrikeOffSection8";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/start-business" element={<StartBusiness />} />
        <Route path="/start-business/company-registration" element={<CompanyRegistration />} />
        <Route path="/start-business/private-limited" element={<PrivateLimited />} />
        <Route path="/start-business/public-limited" element={<PublicLimited />} />
        <Route path="/start-business/llp" element={<LLPRegistration />} />
        <Route path="/start-business/opc" element={<OnePersonCompany />} />
        <Route path="/start-business/nidhi" element={<NidhiCompany />} />
        <Route path="/start-business/producer" element={<ProducerCompany />} />
        <Route path="/start-business/foreign-company" element={<ForeignCompany />} />
        <Route path="/start-business/partnership" element={<PartnershipRegistration />} />
        <Route path="/start-business/sole-proprietorship" element={<SoleProprietorship />} />
        <Route path="/licenses/gst-registration" element={<GSTRegistration />} />
        <Route path="/licenses/fssai-registration" element={<FSSAIRegistration />} />
        <Route path="/licenses/import-export-code" element={<ImportExportCode />} />
        <Route path="/licenses/iso-certification" element={<ISOCertification />} />
        <Route path="/licenses/rera-registration" element={<RERARegistration />} />
        <Route path="/licenses/msme-udyam" element={<MSMEUdyam />} />
        <Route path="/licenses/shop-act" element={<ShopActRegistration />} />
        <Route path="/licenses/brn" element={<BusinessRegistrationNumber />} />
        <Route path="/licenses/startup-registration" element={<StartupRegistration />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/ngo/ngo-registration" element={<NGORegistration />} />
        <Route path="/ngo/section-8" element={<Section8NPO />} />
        <Route path="/ngo/trust-registration" element={<TrustRegistration />} />
        <Route path="/ngo/society-registration" element={<SocietyRegistration />} />
        <Route path="/ngo/ngo-darpan" element={<NGODarpan />} />
        <Route path="/ngo/fcra-registration" element={<FCRARegistration />} />
        <Route path="/ngo/80g-12a" element={<EightyGTwelveA />} />
        <Route path="/ngo/csr" element={<CSR />} />
        <Route path="/trademark" element={<Trademark />} />
        <Route path="/trademark/registration" element={<TrademarkRegistration />} />
        <Route path="/trademark/copyright" element={<CopyrightRegistration />} />
        <Route path="/trademark/design" element={<DesignRegistration />} />
        <Route path="/trademark/patent" element={<PatentRegistration />} />
        <Route path="/compliances" element={<Compliances />} />
        <Route path="/compliances/itr-filing" element={<ITRFiling />} />
        <Route path="/compliances/gst-return" element={<GSTReturn />} />
        <Route path="/compliances/roc-filing" element={<ROCFiling />} />
        <Route path="/compliances/tds-return" element={<TDSReturn />} />
        <Route path="/compliances/xbrl-filing" element={<XBRLFiling />} />
        <Route path="/compliances/gst-audit" element={<GSTAudit />} />
        <Route path="/compliances/ngo-audit" element={<NGOAudit />} />
        <Route path="/compliances/tax-audit" element={<TaxAudit />} />
        <Route path="/compliances/stock-audit" element={<StockAudit />} />
        <Route path="/compliances/statutory-audit" element={<StatutoryAudit />} />
        <Route path="/compliances/bank-audit" element={<BankAudit />} />
        <Route path="/compliances/gst-advisory" element={<GSTAdvisory />} />
        <Route path="/compliances/tax-planning" element={<TaxPlanning />} />
        <Route path="/compliances/legal-secretarial" element={<LegalSecretarial />} />
        <Route path="/compliances/project-financing" element={<ProjectFinancing />} />
        <Route path="/compliances/nri-taxation" element={<NRITaxation />} />
        <Route path="/compliances/strike-off-section-8" element={<StrikeOffSection8 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
