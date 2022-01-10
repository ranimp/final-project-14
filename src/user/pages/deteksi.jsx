import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SoalDeteksi from "../components/soalDeteksi";

export default function DeteksiPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-5 my-12 text-black font-poppins">
        <div className="lg:mb-8 mb-4">
          <h1 className="lg:text-4xl text-xl text-dark-green font-montserrat font-bold capitalize">Tes Level Stress</h1>
          <p className="text-sm lg:text-base mt-2">Tes ini berguna untuk mendeteksi tingkat stress kamu dan akan membantu kami untuk menentukan konsultasi mana yang terbaik untuk kamu.</p>
        </div>
        <div>
          <SoalDeteksi name={'soal 1'}/>
          <SoalDeteksi name={'soal 2'}/>
          <SoalDeteksi name={'soal 3'}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}