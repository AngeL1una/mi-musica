"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function App() {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Travis Scott</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/7d/b0/097db06f-8403-3cf7-7510-139e570ca66b/196871341882.jpg/1200x1200bf-60.jpg"
                    width={270}
                />

            </CardBody>
        </Card>
        
    );
}
