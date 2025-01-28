import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import swift from './swift-og.png';
import python from './python-logo.png';
import chatgpt from './gpt-logo.png';
import java from './java-logo.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import music_icon from './music_icon.png';
import app_logo from './app_logo.png';
import ui_icon from './ui-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    swift,
    python,
    chatgpt,
    java,
    git,
    right_arrow_white,
    logo,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    music_icon,
    app_logo,
    ui_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'ふだながし/ Fudanagashi',
        description: 'IOS App',
        bgImage: '/fudanagashi_icon.png',
        url: 'https://apps.apple.com/us/app/fudanagashi/id6737144293',
    },
    {
        title: 'MyJapan',
        description: 'Web App',
        bgImage: 'MyJapan.png',
        url: 'https://MyJapan.onrender.com',
    },
    {
        title: 'Recurrence Relation Solver',
        description: 'Web App',
        bgImage: '/recurrence.png',
        url: 'https://recurrence-relation.vercel.app',
    },
    {
        title: 'Train Arrival Status',
        description: 'Web App',
        bgImage: '/london_underground.png',
        url: 'https://sota-mitsumori.github.io/London_Underground/',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web App', description: 'Aims to create an useful and insightful Full-stack web app.', link: '' },
    { icon: assets.app_logo, title: 'Mobile app', description: 'Fully committed to designing an iOS and Android app', link: '' },
    { icon: assets.ui_icon, title: 'Large Language Model', description: 'As AI becomes the trend in the tech industry, I am ready to explore cutting-edge technology.', link: '' },
    { icon: assets.music_icon, title: 'Musics', description: 'Immersed in music from a young age, I am driven to develop an app related to music.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'Python, Swift, Java' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'CS Major at Waseda University' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects including iOS app' }
];

export const toolsData = [
    assets.swift, assets.python, assets.java, assets.chatgpt, assets.git
];