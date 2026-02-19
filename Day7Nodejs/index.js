/*
How URL works?

https:// ->protocol
glauniversity.in->domain
/uploadAttendance.aspx -> Path Parm.
?acces_Key=something ->query Par.(its a key value pair.)
#key ->hash Par.(particular line or section(of web-page) we give the #value parameter.)

*/
//---------------------------------------------------------------------------------------------
/*
https:// ->protocol
www.amazon.in/ ->domain
HP-99Y16AA-H200-Wireless-Headset/dp/B0DHKJ5HWL ->path
?pf_rd_p=3d801db5-b954-49d2-b2a2-a8e9a323440e&pf_rd_r=J8CSA08NANKYRCMWH5GC&ref_=AUG-LapsUNrec_B0DHKJ5HWL ->query
----------------------------------------------------------------------------------------------------------
https:// ->protocol
www.amazon.in/ ->domain
JBL-Bluetooth-Lightshow-Splashproof-Personalisation/dp/B09XBH7SMM/ref=sr_1_3 ->path
?dib=eyJ2IjoiMSJ9.5aqQ4FrHJrTO4kw383aoGoWkpBeUG9bLyBj6jkpw6VW_fq8yY6cbAVZrK9d_c7zdSGLbzQd6d1dCTMB2kIZj67g2zZSN8v7p8xPfdDv_t5iKi6ClnOYQ-m7rLyjdV2Xb-MbAXAo-bZpssZ7n6xtYnvOymD42BGWfsDOx_OyJ0vMxFNvxyiB6R78Xp5_RLM5xpE9lMsjk65tbnnglORhwcBqOWu0ZpX30lx_DwfOybg3Hp7zM737iHrWmIl74PXRVkbfVuoxpMpYy-50q3w4sFOFE5r1ZPQRzhShOCSlaZq0.jzo5hpyLruBe-SnVpcqsNzvTnAqrbFhpRgNKe3hEnsg&dib_tag=se&qid=1771319112& 
refinements=p_72%3A1318477031%2Cp_85%3A10440599031%2Cp_89%3AJBL%2Cp_n_g-101014971069111%3A206270883031&rnid=206270882031&rps=1&s=electronics&sr=1-3&th=1 ->query
*/
//----------------------------------------------------------------------------------------------------------
//CLI
[
    "node",
    "file.js",
    "add",
    "1",
    "5",
]
//desturing the array:
const [,,fn,fnn,ff] = process.argv;

// const  fn =process.argv[2];
console.log(fn);
// const  fnn =process.argv[3];
console.log(fnn);
// const  ff =process.argv[4];
console.log(ff);
if(fn == "add"){
    console.log(Number(fnn)+Number(ff));
}
if(fn == "multi"){
   console.log(Number(fnn)*Number(ff));
}

//*******************************************************************************************************