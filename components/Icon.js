import React from "react"

import BookSpells from "./icons/book-spells.svg"

import ChefHat from "./icons/chef-hat.svg"
import ChevronLeft from "./icons/chevron-left.svg"
import ChevronRight from "./icons/chevron-right.svg"

import DeliveryTruck from "./icons/delivery-truck.svg"

import Documents from "./icons/documents.svg"
import DocumentsChecked from "./icons/documents-checked.svg"

import Envelope from "./icons/envelope.svg"
import Group from "./icons/group.svg"

import HandAsking from "./icons/hand-asking.svg"
import HandHeart from "./icons/hand-heart.svg"
import HandHelping from "./icons/hand-helping.svg"

import Heart from "./icons/heart.svg"

import Hoagie from "./icons/hoagie.svg"

import Info from "./icons/info.svg"
import InfoRound from "./icons/info-round.svg"

import PaperPlane from "./icons/paper-plane.svg"
import PhoneRinging from "./icons/phone-ringing.svg"
import Pizza from "./icons/pizza.svg"
import PriceTag from "./icons/price-tag.svg"
import Search from "./icons/search.svg"
import ShareArrow from "./icons/share-arrow.svg"

const iconTypes = {
  "book-spells": BookSpells,
  "chef-hat": ChefHat,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "delivery-truck": DeliveryTruck,
  documents: Documents,
  "documents-checked": DocumentsChecked,
  envelope: Envelope,
  people: Group,
  "hand-asking": HandAsking,
  "hand-heart": HandHeart,
  "hand-helping": HandHelping,
  heart: Heart,
  hoagie: Hoagie,
  info: Info,
  "info-round": InfoRound,
  "paper-plane": PaperPlane,
  "phone-ringing": PhoneRinging,
  pizza: Pizza,
  "price-tag": PriceTag,
  search: Search,
  share: ShareArrow,
}

const IconComponent = ({ name, ...props }) => {
  if (iconTypes[name] != undefined) {
    let Icon = iconTypes[name]
    // return <Icon {...props} />
    return <span>icon</span>
  } else {
    // return <ChevronRight {...props} />
    return <span>icon</span>
  }
}

export default IconComponent
