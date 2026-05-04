# ☀️ SunCart - Summer Essentials Store

A modern, fully responsive e-commerce platform built with Next.js where users can explore and purchase seasonal summer products like sunglasses, summer outfits, skincare items, beach accessories, and more.

## 🚀 Live URL

**[View Live Demo](https://suncart-summer-store-sigma.vercel.app)**

## 🎯 Project Purpose

SunCart is designed to provide a seamless summer shopping experience with:
- Easy product browsing and detailed view
- Secure authentication system
- User profile management
- Responsive design for all devices

## ✨ Key Features

### 🔐 Authentication
- Email/Password registration and login
- Google OAuth integration
- Protected routes (product details requires login)
- Session management with BetterAuth

### 🛍️ Product Management
- Browse all summer products
- Search products by name or brand
- Filter products by category
- Detailed product view with images, pricing, and descriptions
- Related products suggestion

### 👤 User Features
- Personal profile page
- Update profile information (name and photo)
- View order history (coming soon)

### 🎨 UI/UX
- Fully responsive design (Mobile, Tablet, Desktop)
- Modern gradient design
- Toast notifications for user actions
- Loading states for better UX
- Summer-themed color scheme

### 📱 Pages
- **Home** - Hero section, popular products, summer care tips, top brands
- **Products** - All products with search and filters
- **Product Details** - Protected route with full product information
- **Login/Register** - Authentication pages
- **Profile** - User profile management

## 📦 NPM Packages Used

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.x | React framework for production |
| react | 18.x | UI library |
| react-dom | 18.x | React DOM rendering |

### Authentication
| Package | Version | Purpose |
|---------|---------|---------|
| better-auth | latest | Authentication solution |
| @better-auth/mongo-adapter | latest | MongoDB adapter for BetterAuth |
| mongodb | latest | MongoDB driver |

### UI & Styling
| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | latest | Utility-first CSS framework |
| lucide-react | latest | Beautiful icons |
| react-hot-toast | latest | Toast notifications |

### Database
| Package | Version | Purpose |
|---------|---------|---------|
| mongodb | latest | Database connection |
| mongoose | optional | MongoDB ODM |

## 🏗️ Project Structure
