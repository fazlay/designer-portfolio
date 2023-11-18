type Feature = {

  title: String,
  description:  String
}

export type IHomePage = {
  data:{
    _id: String,
  heroTitle: String,
  heroDescription:  String,   
  heroSubtitle:String,   
  aboutUsTitle:  String,   
  aboutUsDescription:  String,
  homePageFeatures:Feature[], 
  blogTitle:String
  }
};