import Carta from "@/components/Card";
import MusicCard from "@/components/MusicCard";
import Cartas from "@/components/Cartas";
import Tarjeta from "@/components/Tarjetas";

export default function App() {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-6 bg-zinc-900 rounded-lg shadow-md mb-[100px]">
        <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
          Hola, mi nombre es <span className="text-red-400">Angel Luna</span> y
          estos son mis <br />
          <span className="underline decoration-red-400">Top Artistas</span>
        </h1>
        <Tarjeta />
      </div>

      <h1 className="text-6xl font-extrabold text-white tracking-wide drop-shadow-md mb-[50px]">
        Estos son mis top 3 <span className="text-red-400">MEJORES</span>{" "}
        cantantes
        <br />
        <span className="underline decoration-red-400">Top Artistas</span>
      </h1>
      <h1 className="text-2xl font-bold text-white text-center bg-zinc-900  p-4 rounded-xl shadow-lg mb-[50px]">
        <span className="">Joji</span> <br />
        <span className="">Travis Scott</span>
        <br />
        <span className="">Kendrick Lamar</span>
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-[100px]">
        <MusicCard
          artist="Travis Scott"
          image="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/7d/b0/097db06f-8403-3cf7-7510-139e570ca66b/196871341882.jpg/1200x1200bf-60.jpg"
        />
        <MusicCard
          artist="Kendrick Lamar"
          image="https://i.ytimg.com/vi/7J6S7EYfEyw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGQgZChkMA8=&rs=AOn4CLBoBgf1p057tPaPJswLqEUGiFOFZQ"
        />
        <MusicCard
          artist="Joji"
          image="https://images7.alphacoders.com/109/1098556.png"
        />
      </div>

      <h1 className="text-6xl font-extrabold text-white tracking-wide drop-shadow-md mb-[50px]">
        Estos son mis Bandas de <span className="text-red-400">Rock</span>{" "}
        <br />
        <span className="underline decoration-red-400">
          De todos los tiempos
        </span>
      </h1>
      <h1 className="text-2xl font-bold text-white text-center bg-zinc-900 p-6 rounded-xl shadow-lg uppercase tracking-wide mb-[50px]">
        <div className="grid grid-cols-2 gap-8 text-white text-xl">
          <span>Black Sabbath</span>
          <span>Iron Maiden</span>
          <span>System of a Down</span>
          <span>Metallica</span>
        </div>
      </h1>

      <div className="items-center justify-center ml-[160px]">
        <Cartas />
      </div>
    </div>
  );
}
