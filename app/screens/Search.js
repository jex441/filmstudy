import React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Nav from "./Nav";
import MovieCard from "./components/MovieCard";

import AppForm from "./components/Forms/AppForm";

import SearchBar from "./components/SearchBar";
const searchResultsData = [
	{
		id: 1,
		title: "The Godfather",
		actors: ["Al Pacino", "Marlin Brando", "James Caan"],
		runtime: 165,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Francis Coppola",
		year: 1970,
		rating: 8.8,
		groupRating: 9.9,
		watchedOn: "Oct 22",
		pickedBy: "Mark Johnson",
		overview:
			"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
	},
	{
		id: 2,
		title: "Pulp Fiction",
		actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
		runtime: 154,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Quentin Tarantino",
		year: 1994,
		rating: 8.9,
		groupRating: 9.2,
		watchedOn: "Nov 15",
		pickedBy: "Sarah Lee",
		overview:
			"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
	},
	{
		id: 6,
		title: "Fight Club",
		actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
		runtime: 139,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "David Fincher",
		year: 1999,
		rating: 8.8,
		groupRating: 9.0,
		watchedOn: "Mar 12",
		pickedBy: "Chris Evans",
		overview:
			"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
	},
	{
		id: 7,
		title: "Seven Samurai",
		actors: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima"],
		runtime: 207,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Akira Kurosawa",
		year: 1954,
		rating: 8.6,
		groupRating: 9.2,
		watchedOn: "Apr 1",
		pickedBy: "Anna Lee",
		overview:
			"A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
	},
	{
		id: 8,
		title: "La Dolce Vita",
		actors: ["Marcello Mastroianni", "Anita Ekberg", "Anouk Aimée"],
		runtime: 174,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Federico Fellini",
		year: 1960,
		rating: 8.0,
		groupRating: 8.5,
		watchedOn: "May 5",
		pickedBy: "John Doe",
		overview:
			"A series of stories following a week in the life of a philandering tabloid journalist living in Rome.",
	},
	{
		id: 9,
		title: "Amélie",
		actors: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
		runtime: 122,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Jean-Pierre Jeunet",
		year: 2001,
		rating: 8.3,
		groupRating: 8.9,
		watchedOn: "Jun 14",
		pickedBy: "Marie Curie",
		overview:
			"Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
	},
	{
		id: 11,
		title: "Pan's Labyrinth",
		actors: ["Ivana Baquero", "Ariadna Gil", "Sergi López"],
		runtime: 118,
		poster:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII=",
		director: "Guillermo del Toro",
		year: 2006,
		rating: 8.2,
		groupRating: 8.8,
		watchedOn: "Aug 30",
		pickedBy: "Pedro Almodovar",
		overview:
			"In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
	},
];

function Search({ navigation, route }) {
	const [searchValue, setSearchValue] = useState("");

	const changeHandler = (e) => {
		e.preventDefault();
		setSearchValue(e.target.value);
	};

	return (
		<SafeAreaView>
			<Nav />
			<SearchBar searchValue={searchValue} changeHandler={changeHandler} />
			<FlatList
				data={searchResultsData}
				keyExtractor={(item) => item.id}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("SingleMovie", {
									key: item.id,
									poster: item.poster,
									title: item.title,
									year: item.year,
									pickedBy: item.pickedBy,
									watchedOn: item.watchedOn,
									overview: item.overview,
									rating: item.rating,
									runtime: item.runtime,
									actors: item.actors,
									director: item.director,
									groupRating: item.groupRating,
									ratedBy: item.ratedBy,
									tags: item.tags,
									viewed: index % 2 === 0 ? true : false,
								})
							}
						>
							<MovieCard
								key={item.id}
								poster={item.poster}
								title={item.title}
								year={item.year}
								director={item.director}
								actors={item.actors}
								pickedBy={item.pickedBy}
								watchedOn={item.watchedOn}
								rating={item.rating}
								runtime={item.runtime}
								groupRating={item.groupRating}
								ratedBy={item.ratedBy}
								tags={item.tags}
								viewed={index % 2 === 0 ? true : false}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</SafeAreaView>
	);
}
export default Search;
