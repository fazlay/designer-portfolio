import React from "react";

const Index = () => {
  const pictureArray = [
    {
      title: "Nord Architected",
      pictureUrl:
        "https://static.wixstatic.com/media/31b5a8_7f90ca0deb57488682885b887f7430d3~mv2.png/v1/fill/w_312,h_208,q_90/31b5a8_7f90ca0deb57488682885b887f7430d3~mv2.webp",
    },

    {
      title: "La table",
      pictureUrl:
        "https://static.wixstatic.com/media/31b5a8_97b588c26e06453c8d580dd212c9c19e~mv2.png/v1/fill/w_312,h_197,q_90/31b5a8_97b588c26e06453c8d580dd212c9c19e~mv2.webp",
    },
    {
      title: "Clear backGround",
      pictureUrl:
        "https://static.wixstatic.com/media/84770f_e9b062c2b29042799e7cf4c67dfe0483~mv2.jpg/v1/fill/w_312,h_207,q_90/84770f_e9b062c2b29042799e7cf4c67dfe0483~mv2.webp",
    },
    {
      title: "",
      pictureUrl: "",
    },
    {
      title: "Nondito",
      pictureUrl:
        "https://static.wixstatic.com/media/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.png/v1/fill/w_312,h_208,q_90/31b5a8_41e5e80ab1aa4d6db5834c5327b0fd7c~mv2.webp",
    },

    {
      title: "Join Wave",
      pictureUrl:
        "https://static.wixstatic.com/media/31b5a8_a009e1046c964f00ad9fba71ac64557e~mv2.png/v1/fill/w_312,h_181,q_90/31b5a8_a009e1046c964f00ad9fba71ac64557e~mv2.webp",
    },
    {
      title: "Punk",
      pictureUrl:
        "https://static.wixstatic.com/media/84770f_874c23a041854f0a98dfbadc1e62611b~mv2.jpg/v1/fill/w_312,h_410,q_90/84770f_874c23a041854f0a98dfbadc1e62611b~mv2.webp",
    },
    {
      title: "Prodex",
      pictureUrl:
        "https://static.wixstatic.com/media/31b5a8_be1176b8465c4b43b9f95bf39eb071ac~mv2.png/v1/fill/w_312,h_167,q_90/31b5a8_be1176b8465c4b43b9f95bf39eb071ac~mv2.webp",
    },
    {
      title: "Capitol",
      pictureUrl:
        "https://static.wixstatic.com/media/84770f_8d7741ebe19847b7b32991ae6bc0aabe~mv2.jpg/v1/fill/w_312,h_250,q_90/84770f_8d7741ebe19847b7b32991ae6bc0aabe~mv2.webp",
    },

    {
      title: "Identity Development",
      pictureUrl:
        "https://static.wixstatic.com/media/84770f_f3139de88c0742059feebd09d754cca5~mv2.jpg/v1/fill/w_312,h_207,q_90/84770f_f3139de88c0742059feebd09d754cca5~mv2.webp",
    },
  ];
  return (
    <div>
      <div className="container max-w-[956px] mx-auto pt-10 overflow-hidden">
        <div className="columns-3xs gap-[0px]  content-start">
          {pictureArray.map((picture) => (
            <div>
              <a href="/aewe">
                <div className="relative p-1 before:content-[''] before:absolute before:inset-0 before:hover:bg-white before:hover:bg-opacity-20">
                  <img className="w-full " src={picture.pictureUrl} />
                  <div className="test__body absolute inset-0  text-[#000] flex flex-col items-center justify-center">
                    <div className="relative">
                      <h1 className="test__title text-3xl font-bold mb-3">
                        {picture.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
