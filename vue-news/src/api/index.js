import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// 2. API 함수들을 정리
async function fetchNewsList() {
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (error) {
   console.log(error); 
  }
}

async function fetchJobsList() {
  try {
    return await axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchAskList() {
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchItemInfo(itemid) {
  try {
    return await axios.get(`${config.baseUrl}item/${itemid}.json`);
  } catch (error) {
    console.log(error);
  }
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}