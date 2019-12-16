// src/js/actions/index.js
import { SET_COLOR } from "../constants/index.js";

export function setColor(id, color) {
  return { type: SET_COLOR, payload: {id, color }}
};