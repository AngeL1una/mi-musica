"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export default function Cartas() {
  return (
    <div className="max-w-[900px] gap-6 row-gap-16 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Black Sabbath
          </p>
          <h4 className="text-white font-medium text-large">Black Sabbath</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://th.bing.com/th/id/R.858313e6e904587f70178044b3571c92?rik=Tv8PtYmDxhgDEQ&riu=http%3a%2f%2fi.imgur.com%2fO5tzjXt.jpg&ehk=usSYpmDkOHcpOm36uI0801t%2bMOZKKJwwiwFBJwrVmfA%3d&risl=&pid=ImgRaw&r=0"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black uppercase font-bold">Nirvana</p>
          <h4 className="text-black font-medium text-large">Nirvana</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.etsystatic.com/41426071/r/il/c099ba/4834289465/il_fullxfull.4834289465_otng.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Iron Maiden
          </p>
          <h4 className="text-white font-medium text-large">Iron Maiden</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://wallpaperaccess.com/full/1337012.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Metallica
          </p>
          <h4 className="text-black font-medium text-2xl">Metallica</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://m.media-amazon.com/images/M/MV5BZTNmNThlNzUtMTFkMS00ZTk3LWEyNjQtNGUyZWM1OGJhNjQzXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_FMjpg_UX1000_.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Los mejores</p>
            <p className="text-black text-tiny">De la historia</p>
          </div>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            System of a Down
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            System of a Down
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://wallpapercave.com/wp/wp2916973.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Aerials</p>
              <p className="text-tiny text-white/60">
                La mejor cancion para mi
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
