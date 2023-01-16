/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState,useEffect } from "react";
import '../assets/styles/Places.css'

export default function Stadiums() {

  return (
    <div>
    <div id="stadiums" className='w-4/5 m-auto mt-5'>


        <h1  className='text-4xl font-bold text-center'>World Cup Stadiums</h1>
        <p  className='text-lg mb-5 text-center'>Check the different stadiums of the World Cup, their location and their capacity!</p>
        <section className='gridoo gap-10 my-10  justify-items-center items-center'>

          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
          <div className='row-span-1 col-span-1'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="200" src="images/lusail.jpg" alt="" />
          </div>
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Lusail</p>
                <p className='font-bold'>80000</p>
              </div>
              <p className='font-semibold'>Lusail Iconic Stadium</p>
            </div>
          </div>

          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="200" src="images/alrayyan.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Al Rayyan</p>
                <p className='font-bold'>40002</p>
              </div>
              <p className='font-semibold'>Education City Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/alkhor.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Al Khor</p>
                <p className='font-bold'>60000</p>
              </div>
              <p className='font-semibold'>Al-Bayt Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/alwakrah.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Al-Wakrah</p>
                <p className='font-bold'>40000</p>
              </div>
              <p className='font-semibold'>Al Janoub Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/doha.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Doha</p>
                <p className='font-bold'>40000</p>
              </div>
              <p className='font-semibold'>Al Thumama Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/alrayyan2.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Al Rayyan</p>
                <p className='font-bold'>48000</p>
              </div>
              <p className='font-semibold'>Khalifa International Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/algharrafa.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Al Gharrafa</p>
                <p className='font-bold'>21175</p>
              </div>
              <p className='font-semibold'>Thani bin Jassim Stadium</p>
            </div>
          </div>
          <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-full object-cover rounded-md' width="300" height="100" src="images/doha2.jpg" alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-sm text-red-400'>Doha</p>
                <p className='font-bold'>20000</p>
              </div>
              <p className='font-semibold'>Suheim bin Hamad Stadium</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}