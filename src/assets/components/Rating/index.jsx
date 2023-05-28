import { Container } from "./style"

import { useState, useEffect } from "react"

export {Rating}

function Rating({star}){
    const [stars,setStars]= useState([])

    const filled = 'M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5525 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z'
    
    const notFilled = 'M10 0.75C10.2708 0.75 10.5108 0.924329 10.5944 1.18182L12.4854 7H18.75C19.024 7 19.2659 7.17835 19.347 7.43998C19.4281 7.70161 19.3294 7.98555 19.1035 8.14046L14.0247 11.6231L15.9829 17.4251C16.0698 17.6828 15.9802 17.9671 15.7612 18.1283C15.5422 18.2895 15.2441 18.2907 15.0239 18.1311L10 14.4906L4.97616 18.1311C4.75596 18.2907 4.45787 18.2895 4.23888 18.1283C4.0199 17.9671 3.93028 17.6828 4.01724 17.4251L5.97543 11.6231L0.896591 8.14046C0.670692 7.98555 0.571975 7.70161 0.653061 7.43998C0.734146 7.17835 0.976139 7 1.25005 7H7.51474L9.40565 1.18182C9.48933 0.924329 9.7293 0.75 10 0.75ZM10 3.39709L8.56319 7.81818C8.47951 8.07567 8.23955 8.25 7.9688 8.25H3.26667L7.07225 10.8595C7.30291 11.0177 7.40041 11.3099 7.31098 11.5749L5.82744 15.9705L9.63331 13.2127C9.8521 13.0541 10.148 13.0541 10.3668 13.2127L14.1727 15.9705L12.6891 11.5749C12.5997 11.3099 12.6972 11.0177 12.9278 10.8595L16.7334 8.25H12.0313C11.7605 8.25 11.5206 8.07567 11.4369 7.81818L10 3.39709Z'

    useEffect(()=>{
        switch (star) {
            case 1:
                setStars([
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
            ])
                break;
            case 2:
                setStars([
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
            ])
                break;
            case 3:
                setStars([
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
            ])
                break;
            case 4:
                setStars([
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                </svg>,
            ])
                break;
            case 5:
                setStars([
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
                <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={filled} fill="#FF859B" />
                </svg>,
            ])
                break;
        
            default:
                setStars([
                    <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                    </svg>,
                    <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                    </svg>,
                    <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                    </svg>,
                    <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                    </svg>,
                    <svg width="20" height="21" viewBox="0 0 21 21" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d={notFilled} fill="#FF859B" />
                    </svg>,
                ])
                break;
        }
    
     
    },[star])
    return (
        <Container >
            {stars && stars.map(star=>{
                return (star)
            })}
        </Container>
    )
}