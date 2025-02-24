"use client"
import React, {useEffect, useRef, useState} from "react";
import ServiceListItem from "@/app/ui/Services/ServiceListItem";
import Image from "next/image";

const data = [
  {
    'id': 1,
    'title': 'Water Damage Restoration',
    'description': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest\n' +
      '            reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage\n' +
      '            cleanup and restoration project. We are your go to water mitigation service in Northern California and\n' +
      '            Nevada.',
  }, {
    'id': 2,
    'title': 'House Remodeling',
    'description': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest\n' +
      '            reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage\n' +
      '            cleanup and restoration project. We are your go to water mitigation service in Northern California and\n' +
      '            Nevada.',
  },{
    'id': 3,
    'title': 'Plumbing Service',
    'description': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest\n' +
      '            reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage\n' +
      '            cleanup and restoration project. We are your go to water mitigation service in Northern California and\n' +
      '            Nevada.',
  },{
    'id': 4,
    'title': 'Water Damage Restoration',
    'description': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest\n' +
      '            reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage\n' +
      '            cleanup and restoration project. We are your go to water mitigation service in Northern California and\n' +
      '            Nevada.',
  },{
    'id': 5,
    'title': 'Plumbing Service',
    'description': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest\n' +
      '            reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage\n' +
      '            cleanup and restoration project. We are your go to water mitigation service in Northern California and\n' +
      '            Nevada.',
  },
]

export default function ServiceList() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(1)
  const [isVisible, setIsVisible] = useState(false);
  const [hoverSelected, setHoverSelected] = useState<null|number>(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    console.log(hoverSelected)
    if (hoverSelected) return;
    if (!isVisible) return;
    const scrollY = window.scrollY;
    const timeout = setTimeout(() => {
      const serviceId = ((activeService + 1) % data.length);
      setActiveService(() => (serviceId === 0 ? data.length : serviceId));
      window.scrollTo(0, scrollY);
    }, 1500);

    return () => clearTimeout(timeout);
  },  [activeService, data.length, isVisible, setActiveService, hoverSelected, setHoverSelected]);

  const onMouseEnterService = (id: number) => {
    setHoverSelected(id);
    setActiveService(id)
  };
  const onMouseLeaveService = () => {
    console.log('onMouseLeaveService')
    setHoverSelected(null);
  };


  return (
    <div ref={containerRef} className="w-full h-fit flex flex-col items-start justify-start gap-12 overflow-hidden relative">
      {/*<ServiceHeader/>*/}
      <div className="w-full flex gap-12 items-stretch">
        <div className="w-full md:w-2/3 max-w-[800px] flex flex-col gap-4">
          {data.map((item, index) => {
            return (
              <ServiceListItem
                key={item.id}
                id={item.id}
                number={'0' + index}
                title={item.title}
                description={item.description}
                isActive={item.id === activeService}
                onHoverEnter={onMouseEnterService}
                onHoverLeave={onMouseLeaveService}
              />
            )
          })}
        </div>
        <div className="hidden w-2/5 md:block relative p-4 overflow-hidden bg-black rounded-lg">
          <Image
            src="/Service1.jpg"
            alt="Experties"
            fill
            style={{objectFit: "cover"}}
            className="rounded-[inherit]"
          />
        </div>
      </div>
    </div>
  );
}
