import myndpixel from './myndpixel.png'
import WhatWeDoImg1 from './WhatWeDoImg1.jpg'
const WhatWeDoVideo = '/assets/WhatWeDoVideo.webm'
import csslogo from './css-3.png'
import htmllogo from './html-5.png'
import nodejslogo from './node-js.png'
import reactlogo from './react.png'
const faqvideo = '/assets/FaqVideo.webm'
import favicon from './favicon.png'
import breadcrumimg from './breadcrumimg.jpg'
import servicewhatwedoimg from './servicewhatwedo.jpg'
import mobileappdevelopment from './serviceimg/mobileappdevelopment.webp'
const skyvideo = '/assets/skyvideo.mp4'
import computerimg from './computer.webp'
import iphoneframe from './iphoneframe.webp'
import lijoyceo from './ourmembers/lijoy-ceo.webp'
import raufteamlead from './ourmembers/rauf-teamlead.webp'
import indranseohead from './ourmembers/indran-seohead.webp'
import jishnumerndev from './ourmembers/jishnu-merndev.webp'
import janavalsanshopifydev from './ourmembers/janavalsan-shopifydev.webp'
import ajithjrmerndev from './ourmembers/ajith-jrmerndev.webp'
import lakshmicoordinator from './ourmembers/lakshmi-coordinator.webp'
import seethajrseo from './ourmembers/seetha-jrseo.webp'
const tabframe = '/assets/tab.PNG'
const laptopframe = '/assets/laptop.PNG'
import mobileimg from './mobile.png'
import ourmission from './ourmission.webp'
import ourvision from './ourvision.webp'
import Viral_cat from './ourclients/vc.png'
import IndelMoney_mind from './ourclients/IndelMoney.png'
import Indel_Corporation from './ourclients/IndelCorporation.png'
import Kavalakkat from './ourclients/Kavalakkat.png'
import Happynex from './ourclients/Happynex.webp'
import Ayur_street from './ourclients/Ayur_street.webp'
import Koffynex from './ourclients/Koffynex.webp'
import Inspire from './ourclients/Inspire.png'
import  fuze from './ourclients/fuze.webp'
import  chaipeedika from './ourclients/chaipeedika.png'
import  distrikt9 from './ourclients/distrikt9img.png'
import customsoftware from './serviceimg/custom-software.png'
import uiux from './serviceimg/ui-ux.webp'
import seoservice from './serviceimg/seoservice.png'
import saasservice from './serviceimg/saas.png'
import EnterpriseSoftware from './serviceimg/EnterpriseSoftware.png'
import questionmark from './questionmark.jpeg'
import shreebhojanmockup from './shreebhojan/shreebhojanmockup.png'
import shreebhojanbanner2 from './shreebhojan/shreebhojan-banner2.jpg'
import shreebhojanproductimg2 from './shreebhojan/shreebhojan-product-img2.webp'
import vc from './parentbrands/vc.png'
import vca from './parentbrands/vca.png'
import twentyonefiftyone from './parentbrands/2151.png'
import  mindstory from './parentbrands/mindstoryhorizontal.png'
import rankbird from './parentbrands/rankbird.png'
import  fuzemockup from './fuze/fuzemockup.png'
import  happynexmockup from './happynex/happynexmockup.webp'
import  indelcorpmockup from './indelcorp/indelcorpmockup.png'
import  chaipeedikamockup from './chaipeedika/chaipeedikamockup.png'
import  inspiremockup from './inspire/inspiremockup.png'
import  indelremitmockup from './indelremit/indelremitmockup.png'
import  kairalifordmockup from './kairaliford/kairalifordmockup.png'
import  distrikt9mockup from './distrikt9/distrikt9mockup.png'
import  viralcatmockup from './viralcat/viralcatmockup.png'
import  kairaliford from './ourclients/kairaliford.png'
import  indelremit from './ourclients/indelremit.png'
import  userimg from './userimg.png'
import skyimg from './skyimg.png'

const rawImg = {
     skyimg,
     reactlogo,
     userimg,
     twentyonefiftyone,
     viralcatmockup,
     indelremit,
     kairaliford,
     distrikt9mockup,
     inspiremockup,
     kairalifordmockup,
     indelremitmockup,
     chaipeedikamockup,
     mindstory,
     rankbird,
     indelcorpmockup,
     fuzemockup,
     happynexmockup,
     vc,
     vca,
     fuze,
     chaipeedika,
     distrikt9,
     shreebhojanmockup,
     shreebhojanbanner2,
     shreebhojanproductimg2,
     questionmark,
     EnterpriseSoftware,
     saasservice,
     seoservice,
     uiux,
     customsoftware,
     Koffynex,
     Inspire,
     Ayur_street,
     Happynex,
     ourmission,
     Viral_cat,
     IndelMoney_mind,
     Indel_Corporation,
     Kavalakkat,
     ourvision,
     tabframe,
     laptopframe,
     lijoyceo,
     seethajrseo,
     raufteamlead,
     indranseohead,
     ajithjrmerndev,
     jishnumerndev,
     janavalsanshopifydev,
     lakshmicoordinator,
     iphoneframe,
     mobileimg,
     skyvideo,
     computerimg,
     csslogo,
     nodejslogo,
     htmllogo,
     myndpixel,
     WhatWeDoImg1,
     WhatWeDoVideo,
     faqvideo,
     favicon,
     mobileappdevelopment,
     breadcrumimg,
     servicewhatwedoimg
};

export const img = Object.keys(rawImg).reduce((acc, key) => {
  const val = rawImg[key];
  acc[key] = (val && typeof val === 'object' && val.src) ? val.src : val;
  return acc;
}, {});

