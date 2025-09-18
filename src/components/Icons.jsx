"use client"

export const BackArrowIcon = ({ onClick = () => { } }) => {
    return <svg onClick={onClick} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="3 0 24 24" className="text-3xl text-gray-700- bg-red-300- text-black cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path></svg>
}


export const SearchIcons = ({ onClick = () => { } }) => {
    return <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
}


export const MessageIcons = ({ onClick = () => { } }) => {
    // return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path></svg>
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>

}


export const NotificationIcons = ({ onClick = () => { } }) => {
    // return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path></svg>
    return <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[1.75rem]-" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>

}

// export const HomeIcon = ({ className, onClick = () => { } }) => {
//     return (
//         <div onClick={onClick} className={`cursor-pointer ${className}`}>
//             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="House-1--Streamline-Ultimate" height="24" width="24">
//                 <desc>
//                     House 1 Streamline Icon: https://streamlinehq.com
//                 </desc>
//                 <path d="M3.753 13.944v8.25h6v-6a1.5 1.5 0 0 1 1.5 -1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
//                 <path d="M0.753 12.444 10.942 2.255a1.5 1.5 0 0 1 2.122 0l10.189 10.189" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
//             </svg>
//         </div>

//     )


// }


export const HomeIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="House-1--Streamline-Ultimate" height="24" width="24">
                <desc>
                    House 1 Streamline Icon: https://streamlinehq.com
                </desc>
                <path fill="#c2f3ff" d="M23.5 13 12 1.5 0.5 13h3v9.5c0 0.2652 0.10536 0.5196 0.29289 0.7071 0.18754 0.1875 0.44189 0.2929 0.70711 0.2929H9c0.13261 0 0.25979 -0.0527 0.35355 -0.1464 0.09377 -0.0938 0.14645 -0.221 0.14645 -0.3536v-4c0 -0.663 0.26339 -1.2989 0.7322 -1.7678C10.7011 16.7634 11.337 16.5 12 16.5s1.2989 0.2634 1.7678 0.7322c0.4688 0.4689 0.7322 1.1048 0.7322 1.7678v4c0 0.1326 0.0527 0.2598 0.1464 0.3536 0.0938 0.0937 0.221 0.1464 0.3536 0.1464h4.5c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V13h3Z" strokeWidth="1"></path>
                <path fill="#66e1ff" d="m3.5 14 8.146 -8.146c0.0464 -0.04656 0.1016 -0.08351 0.1624 -0.10871 0.0607 -0.02521 0.1258 -0.03818 0.1916 -0.03818s0.1309 0.01297 0.1916 0.03818c0.0608 0.0252 0.116 0.06215 0.1624 0.10871L20.5 14v-1h3L12 1.5 0.5 13h3v1Z" strokeWidth="1"></path>
                <path stroke="#1fb47cfa" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5v9c0 0.2652 0.10536 0.5196 0.29289 0.7071 0.18754 0.1875 0.44189 0.2929 0.70711 0.2929H9c0.13261 0 0.25979 -0.0527 0.35355 -0.1464 0.09377 -0.0938 0.14645 -0.221 0.14645 -0.3536v-4c0 -0.663 0.26339 -1.2989 0.7322 -1.7678C10.7011 16.7634 11.337 16.5 12 16.5s1.2989 0.2634 1.7678 0.7322c0.4688 0.4689 0.7322 1.1048 0.7322 1.7678v4c0 0.1326 0.0527 0.2598 0.1464 0.3536 0.0938 0.0937 0.221 0.1464 0.3536 0.1464h4.5c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V14" strokeWidth="1"></path>
                <path stroke="#1fb47cfa" strokeLinecap="round" strokeLinejoin="round" d="M0.5 13 12 1.5 23.5 13" strokeWidth="1"></path>
            </svg>
        </div>

    )
}

export const MessageIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.98 -0.5 24 24" id="Email-Action-Check--Streamline-Ultimate" height="24" width="24">
                <desc>
                    Email Action Check Streamline Icon: https://streamlinehq.com
                </desc>
                <path fill="#cfcaea" d="M18.42392 0.49036459999999993h-16.56C1.1017644 0.49036459999999993 0.48392092000000003 1.1082135999999998 0.48392092000000003 1.8703599999999998v10.12c0 0.7621279999999999 0.6178434799999999 1.38 1.37999908 1.38h16.56c0.7621279999999999 0 1.38 -0.617872 1.38 -1.38v-10.12c0 -0.7621464 -0.617872 -1.3799953999999999 -1.38 -1.3799953999999999Z" strokeWidth="1" />
                <path fill="#ffffff" d="M1.8639199999999996 0.49036459999999993c-0.3659944 0 -0.7170019999999999 0.1453922 -0.9758062799999999 0.40419279999999996C0.62931312 1.1533579999999999 0.48392092000000003 1.5043655999999999 0.48392092000000003 1.8703599999999998v10.12c0 0.36597599999999997 0.1453922 0.7170479999999999 0.40419279999999996 0.9758439999999999 0.25880427999999994 0.25879599999999997 0.6098118799999999 0.404156 0.9758062799999999 0.404156h1.22912l12.879999999999999 -12.879995399999999H1.8639199999999996Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M8.763919999999999 13.370359999999998h-6.8999999999999995c-0.3659944 0 -0.7170019999999999 -0.14536 -0.9758062799999999 -0.404156 -0.2588006 -0.25879599999999997 -0.40419279999999996 -0.609868 -0.40419279999999996 -0.9758439999999999v-10.12c0 -0.3659944 0.1453922 -0.7170019999999999 0.40419279999999996 -0.9758025999999999C1.1469179999999999 0.6357567999999999 1.4979255999999999 0.49036459999999993 1.8639199999999996 0.49036459999999993h16.56c0.36597599999999997 0 0.7170479999999999 0.1453922 0.9758439999999999 0.40419279999999996s0.404156 0.6098081999999999 0.404156 0.9758025999999999v6.8999999999999995" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M19.405559999999998 0.9006836799999999 10.14392 8.31036 0.8813599999999999 0.9006836799999999" strokeWidth="1" />
                <path fill="#78eb7b" d="M16.03652 21.667839999999998c1.091764 0 2.1589639999999997 -0.323748 3.066728 -0.930304 0.9077639999999999 -0.606556 1.6153359999999999 -1.468596 2.033108 -2.4772839999999996 0.417772 -1.008688 0.527068 -2.118576 0.314088 -3.189272 -0.21298 -1.0707879999999999 -0.7386679999999999 -2.05436 -1.5107319999999997 -2.826332 -0.7719719999999999 -0.7720639999999999 -1.7555439999999998 -1.297752 -2.826332 -1.5107319999999997 -1.0706959999999999 -0.21298 -2.180584 -0.10368399999999998 -3.189272 0.314088 -1.008688 0.41786399999999996 -1.8707279999999997 1.125344 -2.4772839999999996 2.033108 -0.606556 0.9077639999999999 -0.930304 1.974964 -0.930304 3.066728 0 1.4639959999999999 0.5815319999999999 2.8680079999999997 1.616808 3.903192 1.0351839999999999 1.0352759999999999 2.439196 1.616808 3.903192 1.616808Z" strokeWidth="1" />
                <path fill="#c9f7ca" d="M16.03652 10.627839999999999c-1.1225839999999998 0.00138 -2.2180279999999994 0.345 -3.140236 0.9849519999999999 -0.9222999999999999 0.640044 -1.6274799999999998 1.5459679999999998 -2.021608 2.597068 -0.394036 1.0511 -0.4583439999999999 2.1973279999999997 -0.184276 3.2859639999999994 0.27415999999999996 1.088544 0.873632 2.067608 1.7185599999999999 2.806736l7.781359999999999 -7.781359999999999c-0.516396 -0.5945959999999999 -1.1545079999999999 -1.07134 -1.8711879999999999 -1.398032 -0.716588 -0.32659999999999995 -1.4950919999999999 -0.49551199999999995 -2.282612 -0.49532799999999994Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M16.03652 21.667839999999998c1.091764 0 2.1589639999999997 -0.323748 3.066728 -0.930304 0.9077639999999999 -0.606556 1.6153359999999999 -1.468596 2.033108 -2.4772839999999996 0.417772 -1.008688 0.527068 -2.118576 0.314088 -3.189272 -0.21298 -1.0707879999999999 -0.7386679999999999 -2.05436 -1.5107319999999997 -2.826332 -0.7719719999999999 -0.7720639999999999 -1.7555439999999998 -1.297752 -2.826332 -1.5107319999999997 -1.0706959999999999 -0.21298 -2.180584 -0.10368399999999998 -3.189272 0.314088 -1.008688 0.41786399999999996 -1.8707279999999997 1.125344 -2.4772839999999996 2.033108 -0.606556 0.9077639999999999 -0.930304 1.974964 -0.930304 3.066728 0 1.4639959999999999 0.5815319999999999 2.8680079999999997 1.616808 3.903192 1.0351839999999999 1.0352759999999999 2.439196 1.616808 3.903192 1.616808Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="m18.496599999999997 14.547039999999999 -2.6679999999999997 3.5640799999999997c-0.05934 0.079028 -0.134964 0.144348 -0.22171999999999997 0.191636s-0.18271199999999999 0.075348 -0.281336 0.08224799999999999c-0.098532 0.006991999999999999 -0.197432 -0.007268 -0.28998399999999996 -0.041859999999999994 -0.09264399999999999 -0.034499999999999996 -0.17664 -0.088596 -0.24656 -0.15842399999999998l-1.38 -1.38" strokeWidth="1" />
            </svg>
        </div>

    )
}

export const ScoreIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Soccer-Field--Streamline-Ultimate" height="24" width="24">
                <desc>
                    Soccer Field Streamline Icon: https://streamlinehq.com
                </desc>
                <path fill="#78eb7b" d="M22 4.5H2a1 1 0 0 0 -1 1v13a1 1 0 0 0 1 1h20a1 1 0 0 0 1 -1v-13a1 1 0 0 0 -1 -1Z" strokeWidth="1" />
                <path fill="#c9f7ca" d="M23 12V5.5a1 1 0 0 0 -1 -1H2a1 1 0 0 0 -1 1V12h22Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M22 4.5H2a1 1 0 0 0 -1 1v13a1 1 0 0 0 1 1h20a1 1 0 0 0 1 -1v-13a1 1 0 0 0 -1 -1Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M1 7.5h3a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1H1" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M23 16.5h-3a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0 -6 3 3 0 0 0 0 6Z" strokeWidth="1" />
            </svg>
        </div>
    )
}

export const FeedbackIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Team-Approve-Disapprove--Streamline-Ultimate" height="24" width="24">
                <desc>
                    Team Approve Disapprove Streamline Icon: https://streamlinehq.com
                </desc>
                <path fill="#ff808c" d="M13.5 8.5a1 1 0 0 0 1 1h2v2l2.5 -2h3.5a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-8a1 1 0 0 0 -1 1v6Z" strokeWidth="1" />
                <path fill="#78eb7b" d="M10.5 8.5a1 1 0 0 1 -1 1h-2v2L5 9.5H1.5a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v6Z" strokeWidth="1" />
                <path fill="#c9f7ca" d="M9.5 1.5h-8a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h0.231l7.961 -7.963A0.946 0.946 0 0 0 9.5 1.5Z" strokeWidth="1" />
                <path fill="#ffbfc5" d="M22.5 1.5h-8a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h0.231l7.961 -7.962A0.946 0.946 0 0 0 22.5 1.5Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5a1 1 0 0 0 1 1h2v2l2.5 -2h3.5a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-8a1 1 0 0 0 -1 1v6Z" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.5a1 1 0 0 1 -1 1h-2v2L5 9.5H1.5a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v6Z" strokeWidth="1" />
                <path fill="#66e1ff" d="M9.164 22.5a5 5 0 0 0 -8.664 0" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M9.164 22.5a5 5 0 0 0 -8.664 0" strokeWidth="1" />
                <path fill="#c77f67" stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M7.8 15.09a5.008 5.008 0 0 1 -5.56 -1.11 3 3 0 0 1 5.56 1.11v0Z" strokeWidth="1" />
                <path fill="#ffdda1" stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M7.832 15.5a3 3 0 1 1 -5.59 -1.52A5.008 5.008 0 0 0 7.8 15.09c0.02 0.136 0.031 0.273 0.032 0.41v0Z" strokeWidth="1" />
                <path fill="#c77f67" stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M22.127 15.09a5.008 5.008 0 0 1 -5.56 -1.11 3 3 0 0 1 5.56 1.11v0Z" strokeWidth="1" />
                <path fill="#ffdda1" stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M22.157 15.5a3 3 0 1 1 -5.59 -1.52 5.008 5.008 0 0 0 5.56 1.11c0.02 0.136 0.03 0.273 0.03 0.41v0Z" strokeWidth="1" />
                <path fill="#66e1ff" d="M23.5 22.5a5 5 0 0 0 -8.664 0" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M23.5 22.5a5 5 0 0 0 -8.664 0" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="m20 4 -3 3" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="m17 4 3 3" strokeWidth="1" />
                <path stroke="#2380b7" strokeLinecap="round" strokeLinejoin="round" d="M7.283 3.835 5.346 6.418a0.5 0.5 0 0 1 -0.754 0.053l-1 -1" strokeWidth="1" />
            </svg>
        </div>
    )
}

export const PartnerWUIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.98 -0.5 24 24" id="Business-Contract-Handshake-Sign--Streamline-Ultimate" height="24" width="24">
                <desc>
                    Business Contract Handshake Sign Streamline Icon: https://streamlinehq.com
                </desc>
                <path fill="#88d96a" d="M15.18 0.46H3.68c-.732 0-1.434.29-1.952.808A2.75 2.75 0 0 0 .92 3.22v15.64c0 .122.048.239.135.325.086.086.203.135.325.135h11.04c.122 0 .239-.049.325-.135.086-.086.135-.203.135-.325V3.22" strokeWidth="1" />
                <path fill="#fff" d="M14.444.46H3.68c-.732 0-1.434.29-1.952.808A2.75 2.75 0 0 0 .92 3.22v10.764L14.444.46Z" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M15.18.46H3.68c-.732 0-1.434.29-1.952.808A2.75 2.75 0 0 0 .92 3.22v15.64c0 .122.048.239.135.325.086.086.203.135.325.135h11.04c.122 0 .239-.049.325-.135.086-.086.135-.203.135-.325V3.22" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M14.77336 19.723h-.0092" strokeWidth="1" />
                <path fill="#ffdda1" stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M18.59136 14.617c-.124.161-.192.359-.191.563v3.819l-3.625.726 1.03-.828c.127-.104.208-.255.225-.418.017-.164-.03-.327-.133-.456l-1.766-1.95-.653.267c-.251.104-.532.112-.788.022a1.202 1.202 0 0 1-.602-.51c-.131-.238-.17-.516-.108-.78.06-.265.218-.498.44-.654.049-.036.101-.067.156-.092l1.702-.828a1.7 1.7 0 0 1 1.206-.065l3.108 1.185Z" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="m15.178 15.638-1.049.432" strokeWidth="1" />
                <path fill="#ffdda1" stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="m15.804 18.895-1.03.828h-.009l-2.18 1.758a.65.65 0 0 1-.452.139.63.63 0 0 1-.422-.212L9.568 19.78H8.28v-4.6l2.622-1.112c.158-.062.327-.094.497-.092a1.46 1.46 0 0 1 .8.259l.221.184a1.13 1.13 0 0 0-.44.654c-.061.265-.023.543.108.781.131.238.345.42.602.51.256.09.537.082.788-.022l.653-.267 1.766 1.95c.1.129.148.292.131.454a.63.63 0 0 1-.225.416Z" strokeWidth="1" />
                <path fill="#66e1ff" stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M8.28 15.18v4.6a.92.92 0 0 1-.92.92H5.52v-6.44h1.84c.244 0 .478.097.65.27.173.172.27.406.27.65Z" strokeWidth="1" />
                <path fill="#66e1ff" stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M21.16 14.26v6.44h-1.84a.92.92 0 0 1-.65-.27.92.92 0 0 1-.27-.65v-4.6a1.05 1.05 0 0 1 .52-.855 1.02 1.02 0 0 1 .727-.36h1.84Z" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M3.68 4.6h6.44" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M3.68 7.36h6.44" strokeWidth="1" />
                <path stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M3.68 10.12h3.22" strokeWidth="1" />
                <path fill="#eee" stroke="#191919b0" strokeLinecap="round" strokeLinejoin="round" d="M12.88 3.22V2.76a2.3 2.3 0 0 1 .674-1.626A2.3 2.3 0 0 1 15.18.46c1.27 0 2.3 1.03 2.3 2.76h-4.6Z" strokeWidth="1" />
            </svg>
        </div>
    )
}

export const LogoutIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Following-1--Streamline-Ultimate" height="24" width="24">
                <desc>Following 1 Streamline Icon: https://streamlinehq.com</desc>
                <path
                    fill="#29af91"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.264 9.757a4.752 4.752 0 1 0 0 -9.504 4.752 4.752 0 0 0 0 9.504Zm.19 9.804c0 .569.172 1.097.467 1.535H1.484c-.575 0-1.036-.486-.94-1.053.753-4.424 4.55-8.18 9.715-8.18 2.82 0 5.231 1.118 6.963 2.853a2.498 2.498 0 0 0-.437 1.412v.683h-3.582a2.75 2.75 0 0 0-2.75 2.75Zm8.081-1.25V16.13a.75.75 0 0 1 1.28-.53l3.435 3.433a.75.75 0 0 1 0 1.061l-3.434 3.434a.75.75 0 0 1-1.28-.53v-2.186h-5.333a1.25 1.25 0 0 1 0-2.5h5.332Z"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}

export const TrashIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Delete--Streamline-Ultimate" height="24" width="24">
                <desc>Delete Streamline Icon: https://streamlinehq.com</desc>
                <path
                    d="M0.5 12a11.5 11.5 0 1 0 23 0 11.5 11.5 0 1 0 -23 0Z"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                />
                <path
                    d="M3.869 20.131 20.131 3.869"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}