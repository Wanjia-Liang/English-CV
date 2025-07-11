# Wholesale Ordering App

A modern React-based wholesale ordering application that supports multiple input methods for placing orders. Users can order products through traditional cart systems, voice input, handwritten picture uploads with OCR, and online fill-in forms.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse and add products to cart
- **Shopping Cart**: Manage quantities, remove items, view totals
- **Multiple Order Input Methods**:
  - **Online Form**: Traditional form-based ordering
  - **Voice Input**: Speak your order using Web Speech API
  - **Handwritten Upload**: Upload images of handwritten orders with OCR text extraction
- **Order Review**: Comprehensive review of cart and submitted orders

### Technical Features
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Bootstrap 5 styling with clean, professional interface
- **Real-time Processing**: Voice recognition and OCR processing in real-time
- **No Backend Required**: Client-side processing for MVP

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Bootstrap 5
- **Voice Recognition**: Web Speech API
- **OCR Processing**: Tesseract.js
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wholesale-ordering-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Product Catalog
- Browse available products
- Click "Add to Cart" to add items
- View product details and pricing

### Shopping Cart
- Review added items
- Adjust quantities using number inputs
- Remove items with the "Remove" button
- View total cost

### Online Order Form
- Fill in your name and company
- Enter order details in the text area
- Submit the form to create an order

### Voice Order
- Click "Start Voice Input" (requires microphone permission)
- Speak your order clearly
- Review the transcribed text
- Submit the voice order

### Handwritten Order
- Upload an image of your handwritten order
- Click "Extract Text" to process with OCR
- Review the extracted text
- Submit the handwritten order

### Order Review
- View your current cart contents
- Review the last submitted order (from any method)
- See order details and method used

## 🔧 Browser Compatibility

### Voice Input
- **Supported**: Chrome, Edge, Safari
- **Not Supported**: Firefox (limited Web Speech API support)

### OCR Processing
- **Supported**: All modern browsers
- **Performance**: May be slower on mobile devices

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🔮 Future Enhancements

- **Backend Integration**: Add server-side processing and database storage
- **User Authentication**: Login/signup functionality
- **Order History**: Track past orders
- **Payment Integration**: Stripe or PayPal integration
- **Inventory Management**: Real-time stock updates
- **Email Notifications**: Order confirmation emails
- **Mobile App**: React Native version

## 🐛 Troubleshooting

### Voice Input Not Working
- Ensure you're using a supported browser (Chrome recommended)
- Check microphone permissions
- Try refreshing the page

### OCR Not Processing
- Ensure the image is clear and well-lit
- Try with printed text for better accuracy
- Check browser console for errors

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Update npm: `npm install -g npm@latest`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using React and modern web technologies** 