import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <>
           
            {/* Async scripts for Next.js */}
            <script src="/js/jquery-3.5.1.min.js" async></script>
            <script src="/js/bootstrap.bundle.min.js" async></script>
            <script src="/vendor/owl-carousel/js/owl.carousel.min.js" async></script>
            <script src="/vendor/wow/wow.min.js" async></script>
            <script src="/js/mobster.js" async></script>
        </>
    );
}
