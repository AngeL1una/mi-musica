"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function MusicCard({ artist, image }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{artist}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={`Imagen de ${artist}`}
          className="object-cover aspect-square rounded-xl w-full"
          src={image}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
