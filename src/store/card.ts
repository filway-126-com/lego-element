import { defineStore } from 'pinia'

export interface UserProps {
  isLogin: boolean
  userName?: string
}

export interface CardProps {
  id: number
  title: string
  author: string
  img: string
  copiedCount: number
}

export interface GlobalDataProps {
  user: UserProps
  cards: CardProps[]
}

const testData: CardProps[] = [
  {
    id: 1,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 11,
  },
  {
    id: 2,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 12,
  },
  {
    id: 3,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 133,
  },
  {
    id: 4,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 144,
  },
  {
    id: 5,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 167,
  },
  {
    id: 6,
    title: 'Card Title',
    img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    author: 'filway',
    copiedCount: 541,
  },
]

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      templates: testData,
      user: { isLogin: false },
    }
  },
})
