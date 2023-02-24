import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import loadable from "@loadable/component";

const Carousel = loadable(() => import("react-spring-3d-carousel"))

export const Carroussel = (props) => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

export const CoverflowEffect = () => {

  const Card = ({ imagen, title, description, url }) => {
    const [show, setShown] = useState(false);
    const isDesktopOrTablet = window.matchMedia("(min-width: 768px)").matches;
  
    const props3 = useSpring({
      transform: show ? "scale(1.03)" : "scale(1)",
      boxShadow: show
        ? "0 20px 25px rgb(0 0 0 / 25%)"
        : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (
      <animated.div
        className="card"
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={imagen} alt="" />
        <h2 style={{fontWeight: 'bold'}}>{title}</h2>
        {isDesktopOrTablet && (
          <p>{description}</p>
        )}
        <div className={"btnn"}>
          <button className={"btn btn-center"}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Registry
            </a>
          </button>
        </div>
      </animated.div>
    );
  }  

  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_c71c0b52-c876-4dfc-9931-6e2c43f9accd"
          title="KitchenAid Classic 4.5qt Stand Mixer - White"
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_b336a8fb-2f44-46a1-840a-6d51f2226f53?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Ring 1080p Wireless Video Doorbell" 
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_ef6b1ccb-6c4a-484b-bd21-2d12e726e286?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="iRobot Roomba 675 Wi-Fi Connected Robot Vacuum"
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_922abb7b-62bd-42fd-a9de-b06d5417cc5b?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="simplehuman Stainless Steel 58L Rectangular Recycling Step Trash Can Brushed Silver"
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_0d2c844e-437f-4aa8-b326-6820a0bae3b6?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Hamilton Beach 2 Slice Toaster - Stainless Steel" 
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_caa09acd-b720-4639-82b0-d46393811837?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Pyrex 20pc Glass Freshlock Food Storage Set" 
          description="Click the Registry button below to view the item in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_4ed529f3-3ca3-4289-a1d2-210540a5e84f?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Upholstered Natural Wood Ottoman - Hearth & Hand™ with Magnolia" 
          description="Click the Registry button below to view in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://target.scene7.com/is/image/Target/GUEST_fd07d5c1-0c76-4445-bf92-760fb3e99020?wid=325&hei=325&qlt=80&fmt=pjpeg"
          title="Shaker Dining Chair - Hearth & Hand™ with Magnolia" 
          description="Click the Registry button below to view in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_DyPUOO6XLdJaYXHodtZeCDNUvRqSerGxA&usqp=CAU"
          title="Target Registry for Household Essentials" 
          description="Click the Registry button below to view in Target Registry"
          url="https://www.target.com/gift-registry/gift-giver?registryId=371bb250-900d-11ed-9e6e-c13b84d6d04d&type=WEDDING"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="https://thebudgetsavvybride.com/app/uploads/2018/10/zola-728x728.jpg.webp"
          title="Zola for Gift Cards & Charities" 
          description="Click the Registry button below to view in Zola Registry"
          url="https://www.zola.com/wedding/guruprasadandvaishnavi/registry"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen="data:image/jpeg;base64,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"
          title="Amazon for other miscellaneous registry items" 
          description="Click the Registry button below to view in Zola Registry"
          url="https://www.amazon.com/wedding/vaishnavi-viswanathan-guru-prasad-venkataraghavan--march-2023/registry/4AIFTJXOC0K9"
        />
      )
    }
  ];
  return (
    <div className="overflow-hidden lg:overflow-visible">
      <Carroussel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={true}
        opacity={0.5}
      />
    </div>
  );
}

export default CoverflowEffect;
