import React from 'react';
import styles from "./Footer.module.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className={styles.footerWrap}>
            <div className={styles.footerNotice}>
                <p>큐피커에서 제공하는 모든 콘텐츠의 저작권은 창작자 또는 제공업체에 있으며, 무단 전재 및 재배포 시 저작권 법에 따라 법적 책임을 물을 수 있습니다.</p>
            </div>
            <footer>
                <div>(주) 피플리 사업자 정보</div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerInfo}>
                        <ul>
                            <li><Link to={""}>공지사항</Link></li>
                            <li><Link to={""}>고객센터</Link></li>
                            <li><Link to={""}>이용약관</Link></li>
                            <li><Link to={""}><strong>개인정보처리방침</strong></Link></li>
                            <li><Link to={""}>법적고지</Link></li>
                            <li><Link to={""}>큐피커 앱 다운로드</Link></li>
                        </ul>
                        <span className={styles.copyright}>Copyright ⓒ peopulley Inc. All rights reserved.</span>
                    </div>
                    <div className={styles.footerSns}>
                        <div className={styles.footerQr}>
                            <div className={styles.qrImage}> </div>
                            <div className={styles.qrInfo}>
                                <p><strong>APP 다운로드</strong></p>
                                <p>큐피커를</p>
                                <p>모바일 앱으로 만나보세요</p>
                            </div>
                        </div>
                        <ul className={styles.footerIcon}>
                            <li><Link to={""}><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li><Link to={""}><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li><Link to={""}><FontAwesomeIcon icon={faTwitter} /></Link></li>
                            <li><Link to={""}><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;