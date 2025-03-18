"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ServiceListItem from "./ServiceListItem";

export default function ServiceList({ data }: { data: Service[] }) {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState<number>(
    Number(data[0].id)
  );
  const [isVisible, setIsVisible] = useState(false);
  const [hoverSelected, setHoverSelected] = useState<number | null>(null);

  const imageData: Service | undefined = Array.isArray(data)
    ? data.find((e) => Number(e.id) === Number(activeService))
    : undefined;

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
    if (hoverSelected) return;
    if (!isVisible) return;

    const scrollY = window.scrollY;
    const timeout = setTimeout(() => {
      if (!Array.isArray(data) || data.length === 0) return;

      const currentIndex = data.findIndex(
        (e) => Number(e.id) === Number(activeService)
      );
      const nextIndex = (currentIndex + 1) % data.length;

      setActiveService(Number(data[nextIndex].id));
      window.scrollTo(0, scrollY);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [activeService, data, isVisible, hoverSelected]);

  const onMouseEnterService = (id: number) => {
    setHoverSelected(id);
    setActiveService(id);
  };

  const onMouseLeaveService = () => {
    setHoverSelected(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-fit flex flex-col items-start justify-start gap-12 overflow-hidden relative"
    >
      {/*<ServiceHeader/>*/}
      <div className="w-full flex gap-12 items-stretch">
        <div className="w-full md:w-2/3 max-w-[800px] flex flex-col gap-4">
          {data.map((item, index) => {
            return (
              <ServiceListItem
                key={item.id}
                id={Number(item.id)}
                number={"0" + index}
                title={item.title}
                description={item.description}
                isActive={Number(item.id) === activeService}
                onHoverEnter={onMouseEnterService}
                onHoverLeave={onMouseLeaveService}
              />
            );
          })}
        </div>
        {imageData && (
          <div className="hidden w-2/5 md:block relative p-4 overflow-hidden bg-black rounded-lg">
            <Image
              src={imageData.image}
              alt="Service Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[inherit]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
