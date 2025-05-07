import Image from "next/image";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#F2F8F3] text-[#2A2A2A] pt-12 pb-6">
      <div className="px-12 grid md:grid-cols-5 grid-cols-2 gap-8 mb-10">
        {/* Logo + App Store */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={296}
              height={51}
              className="mr-2"
            />
          </div>

          <p className="text-sm font-semibold mb-2">Download App:</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={140}
              height={40}
              className="w-[120px] sm:w-[140px]"
            />
            <Image
              src="/images/googleplay.png"
              alt="Google Play"
              width={140}
              height={40}
              className="w-[120px] sm:w-[140px]"
            />
          </div>
        </div>

        {/* Quick links 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick links 1</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Detail Blog</li>
          </ul>
        </div>

        {/* Quick links 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick links 2</h4>
          <ul className="space-y-2 text-sm">
            <li>Favorites</li>
            <li>Cart</li>
            <li>Sign in</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#6A983C] text-base" /> 1234 5678 90
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#6A983C] text-base" />
              freshharvests@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[#6A983C] text-base" /> Tanjung Sari
              Street, Pontianak, Indonesia
            </li>
          </ul>

          <p className="mt-6 font-semibold text-sm">
            Accepted Payment Methods:
          </p>
          <div className="flex gap-3 mt-3">
            <Image
              src="https://i.ibb.co.com/NgyjjnyS/Visa.png"
              alt="Visa"
              width={50}
              height={30}
            />
            <Image
              src="https://i.ibb.co.com/KcpQysfw/Paypal.png"
              alt="PayPal"
              width={50}
              height={30}
            />
            <Image
              src="https://i.ibb.co.com/m5y8p5VC/ApplePay.png"
              alt="Apple Pay"
              width={50}
              height={30}
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-600">
        <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
        <div className="flex gap-4 mb-4 md:mt-0">
          <Image
            src="/images/twitter.png"
            alt="Twitter"
            width={40}
            height={40}
          />
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width={40}
            height={40}
          />
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}
