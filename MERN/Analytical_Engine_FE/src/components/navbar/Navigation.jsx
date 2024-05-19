import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/">
              Home
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/contents">
              Contents
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/events">
              Events
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/organisations">
              Organisations
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/recommendations">
              Recommendations
            </NavLink>
          </li>
          <li class="navigation__item">
            <NavLink className="navigation__link" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
