# Vehicles Management App

A modern React application for managing a vehicle inventory. Built with **React 19**, **Redux Toolkit**, **Vite**, and styled with **Bulma CSS**, this project demonstrates state management, form handling, and real-time filtering of vehicle data.

## Overview

This application allows users to:

- **Add vehicles** with details like name, cost
- **View vehicle list** with all added vehicles
- **Search vehicles** by name or cost using dynamic filters
- **Calculate total value** of all vehicles in the inventory
- **Manage state** using Redux Toolkit for centralized state management

## Features

- ✅ **Vehicle Management**: Add, list, and manage vehicles
- ✅ **Search & Filter**: Filter vehicles by name and cost range
- ✅ **Value Calculation**: Automatically calculate total inventory value
- ✅ **Redux State Management**: Centralized state with Redux Toolkit slices
- ✅ **Responsive UI**: Built with Bulma CSS for clean, responsive design
- ✅ **Form Validation**: Input validation for vehicle creation
- ✅ **Real-time Updates**: Instant UI updates on state changes

## Getting Started

### Installation

```bash
cd vehicles
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite development server at `http://localhost:5173` (or next available port).

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Lint

```bash
npm run lint
```

Checks code quality using ESLint.

## Project Structure

```
src/
├── components/
│   ├── CarForm.jsx       # Form to add new vehicles
│   ├── CarList.jsx       # Display list of vehicles
│   ├── CarSearch.jsx     # Search and filter interface
│   └── CarValue.jsx      # Display total vehicle value
├── store/
│   ├── index.js          # Redux store configuration
│   └── slices/
│       ├── carsSlice.js  # Redux slice for vehicle data
│       └── formSlice.js  # Redux slice for form state
├── App.jsx
├── main.jsx
└── styles.css
```

## Redux Architecture

### carsSlice

Manages the list of vehicles and their operations:

- Add vehicle
- Remove vehicle
- Update vehicle

### formSlice

Manages form state for creating new vehicles:

- Form inputs (name, cost, color)
- Form reset after submission

## Components

### CarForm

Input form for adding new vehicles to the inventory. Accepts vehicle details and dispatches Redux actions.

### CarList

Displays all vehicles in a table format with options to remove vehicles.

### CarSearch

Provides search functionality to filter vehicles by name and cost range.

### CarValue

Shows the total monetary value of all vehicles in the inventory.

## Technologies

- **React 19**: Modern UI library with latest features
- **Redux Toolkit**: Simplified state management
- **React-Redux**: Official React bindings for Redux
- **Vite**: Fast build tool and dev server
- **Bulma CSS**: Modern CSS framework for responsive design
- **JavaScript ES6+**: Modern JavaScript features

## How It Works

1. **Add Vehicle**: User fills out the CarForm with vehicle details
2. **Redux Action**: Form submission dispatches a Redux action to add the vehicle
3. **State Update**: Redux slice updates the vehicles list
4. **UI Re-render**: React components automatically re-render with new data
5. **Search/Filter**: CarSearch component filters the list in real-time
6. **Calculate Value**: CarValue component automatically calculates total

## Key Concepts

### Redux Toolkit Slices

Simplified Redux implementation using `createSlice` for:

- Reduced boilerplate
- Built-in immer middleware for immutable updates
- Automatic action creators

### Component Props

Components are connected to Redux store using `useSelector` and `useDispatch` hooks for reactive data flow.

### Form State Management

Separate form slice manages temporary form input state before submission.

## Development

- **Vite** provides hot module replacement (HMR) for instant updates during development
- **ESLint** configuration ensures code quality
- **React Compiler** is configured for optimized re-renders

## Future Enhancements

- Edit vehicle details
- Persist data to local storage
- Add vehicle categories/types
- Export inventory data
- Advanced filtering options
- Vehicle images support
