# 💸 UtakPera

UtakPera is a financial planner mobile app built with React Native and Expo. It helps you track your expenses and income, manage your categories, and keep your finances in check. The app uses SQLite for local data storage.

## 📱 Features

📊 **Track Transactions**: Add, view, and manage your expenses and income.
🗂️ **Manage Categories**: Organize your transactions into categories.
📅 **Monthly Overview**: Get a summary of your financial activities for the month.
💾 **Local Storage**: All data is stored locally using SQLite.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Expo CLI

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/UtakPera.git
   cd UtakPera
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the Expo development server:

   ```sh
   npx expo start
   ```

4. Open the app on your device using the Expo Go app or an emulator.

## 🛠️ Project Structure

```plaintext
UtakPera/
├── assets/
│   ├── UtakPera.db
│   └── ...
├── src/
│   ├── components/
│   │   ├── TransactionListItem.tsx
│   │   └── ...
│   ├── screens/
│   │   ├── Home.tsx
│   │   └── ...
│   ├── database.ts
│   └── ...
├── App.tsx
├── package.json
├── tsconfig.json
└── ...
```

## 📚 Usage

### Adding a Transaction

1. Open the app and navigate to the "Home" screen.
2. Click on the "Add Transaction" button.
3. Fill in the transaction details and save.

### Viewing Transactions

1. Open the app and navigate to the "Home" screen.
2. Scroll through the list of transactions to view details.

### Managing Categories

1. Open the app and navigate to the "Categories" screen.
2. Add, edit, or delete categories as needed.

## 🛠️ Development

### Database Setup

Ensure that the `UtakPera.db` file is placed in the `assets` folder. The app will load this database file on startup.

### Converting AAB to APK

If you have an Android App Bundle (AAB) file and need to convert it to an APK file, follow these steps:

1. **Download `bundletool`**:
   - Download the latest `bundletool` JAR file from the [official GitHub repository](https://github.com/google/bundletool/releases).

2. **Install Java**:
   - Ensure that you have Java installed on your machine. You can download it from [here](https://www.oracle.com/java/technologies/javase-downloads.html).

3. **Generate APK from AAB**:
   - Use the `bundletool` to generate an APK from the AAB file.

   ```sh
   java -jar bundletool-all-1.8.2.jar build-apks --bundle=myapp.aab --output=myapp.apks --mode=universal
   ```

   - Replace `bundletool-all-1.8.2.jar` with the actual version you downloaded.
   - Replace `myapp.aab` with the name of your AAB file.
   - This command will generate a file named `myapp.apks`.

4. **Extract the APK**:
   - The `myapp.apks` file is a ZIP archive. You can extract it to get the universal APK.

   ```sh
   unzip myapp.apks -d myapp_apks
   ```

   - The universal APK will be located in the `myapp_apks/universal` directory.

## 📦 Dependencies

- Expo
- React Native
- SQLite
- React Navigation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [JC Dulos](https://github.com/JC-Dulos10)

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue or contact me
