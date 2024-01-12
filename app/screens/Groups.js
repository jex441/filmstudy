import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	FlatList,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import Nav from "./Nav";
function Groups({ navigation }) {
	const data = [
		{
			id: 1,
			name: "Group No 1",
			img: "www.img.com",
			members: [
				{
					id: 1,
					name: "Brian Castro",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 2,
					name: "Alice Johnson",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 3,
					name: "Charlie Davis",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 4,
					name: "Eva Martinez",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 5,
					name: "Greg Robinson",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 6,
					name: "Hannah Lee",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 7,
					name: "Isaac Taylor",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 8,
					name: "Jasmine White",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 9,
					name: "Kevin Adams",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
				{
					id: 10,
					name: "Laura Brown",
					thumbnail:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADIQAQACAgAEBAMHAwUAAAAAAAABAgMEBREhMQYSIlFBYXEUMkKBwdHhUqHwEzM0YpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANIA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAOnV0tncmY1sNsnLvPaI/OVrh8L7doicubFT5RE2NFEhor+FM/L0bWO0/wDaswrtvgu/qRM3w+ekfixzzj9zVVwAgAAAAAAAAAAAACQF5wLgf2zlsbdbRg/DX+v+HBwbR+379MVv9uvqv9PZvaVitYrWIiIjlEeyKjFix4qRTFSKUjtWscofYICOSQFLxngWLcrbLrxGPY+XSL/X92OvS2O9qZKzW1Z5TE/CX6WzXizh8TSu9jj1V5Vycvb4Soy4CoAAAAAAAAAAJQA1fg7BEaufPy63v5Y+kR/LRKbwnPPhMR7ZLLlmqAAAAPDdwV2dTNhtHS9Jh7onsD806/FD6tMTa0x2mZfLSAAAAAAAAAACUANN4O2f+RrWmImZi9Y/tP6NO/OdLZvp7WPYx96T1j3j4w32ntYtvXpmw2ia2/tPsyroAAAAcXF9qNTh2fL+KK8qx856Q7Jnqx3iTicbeeNfBbnixT1mJ6Wt/AKTt0AaQAAAAAAAAAAAAd/COIbOln5a8TkrafVi/q/aUcO4dl3LeafRhjvf9IaPV1cWrTy4aRX3n4z9QWWnu49mkT9y/LrS3eHUpsmCl+s9/eEVrnx9Mexbl7TLKrp55cuPFXzZLxWPmqpnbt3z2/KeT5jXjnzvM3n3kHBx/jGxetsGDHfFhnpOXtNvp7Qzjb2pW1JpasTWenKY6KPiXBuVZy6cdus4/wBliKQT2QoAAAAAAAAAAO7hehO7m9XOMVPvT+jkw47ZstceOPXefLDX6mvTVwVxU7R3+c+5o9MdK46RSlYrWI5REPoEAAAAAAFNxrh3nrOzgr64+/WPjHuoG4ZjjWnGrs+bHHLFk6x8p9gVwCgAAAAAAAC78O63O19m0dvTX9V7yc3D8H2fSw4+XWK85+s9XSgAAAAAAAAOXiWt9q1L44j1R6q/V1AMP/nUdnFcP+hv5aRHSZ80fSerjUAAAAAAHpgrF8+Ks9rXrE/+gUbQBAAAAAAAAAABnvElYjZxW+M0mJ/KVQBAAUAAf//Z",
				},
			],
		},
	];

	let count = 0;

	return (
		<SafeAreaView>
            <Nav />
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Group");
						}}
					>
						<View style={styles.groupCard}>
							<View style={styles.groupImageContainer}>
								<Image
									source={require("../assets/placeholder.png")}
									style={styles.groupImage}
								/>
							</View>
							<View style={styles.groupTextContainer}>
								<Text style={styles.groupTextName}>{item.name}</Text>
								<View style={styles.groupMemberThumbnailsContainer}>
									<FlatList
										data={item.members}
										renderItem={({ item, index }) => {
											if (index >= 6) {
												count++;
											}
											if (index > 7) {
												return;
											}
											if (index > 6) {
												return (
													<View
														style={{
															height: 20,
															flexDirection: "column-reverse",
															left: index * 16,
														}}
													>
														<Text
															style={{
																fontSize: 12,
																color: "#333",
																fontWeight: 300,
															}}
														>
															+{count} others
														</Text>
													</View>
												);
											}
											return (
												<View
													style={{
														height: 25,
														width: "100%",
														position: "absolute",
														left: index * 16,
													}}
												>
													{index < 6 ? (
														<Image
															source={{
																uri: item.thumbnail,
															}}
															style={{
																height: 25,
																width: 25,
																borderColor: "#FFF",
																borderRadius: 30,
																borderWidth: 1,
															}}
														/>
													) : (
														<Text>...and {item.length - 7}</Text>
													)}
												</View>
											);
										}}
										keyExtractor={(item) => item.id}
										horizontal
									/>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				style={{ width: "100%" }}
				onPress={() => {
					navigation.navigate("CreateNewGroup");
				}}
			>
				<View style={styles.createGroupCard}>
					<View style={styles.createGroupImageContainer}>
						<Image
							style={styles.createGroupImage}
							source={require("../assets/icons/Add.png")}
						/>
					</View>

					<View style={styles.createGroupTextContainer}>
						<Text style={styles.createGroupText}>Create a new group</Text>
					</View>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	groupCard: {
		height: 120,
		flexDirection: "row",
		alignItems: "space-between",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "#FFF",
		padding: 6,
	},
	groupImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		width: "30%",
		height: "100%",
	},
	groupImage: {
		width: 110,
		height: 80,
	},
	groupTextContainer: {
		padding: 10,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		textAlign: "left",
		flexDirection: "column",
		width: "70%",
	},
	groupTextName: {
		fontSize: 16,
	},
	groupMemberThumbnailsContainer: {
		height: 30,
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		marginTop: 8,
	},
	groupMemberThumbnail: {
		position: "absolute",
		height: 20,
		width: 20,
		borderColor: "#FFF",
		borderRadius: 30,
		borderWidth: 1,
	},
	createGroupCard: {
		height: 100,
		flexDirection: "row",
		width: "100%",
		alignItems: "space-between",
		justifyContent: "center",
		alignItems: "center",
	},
	createGroupImageContainer: {
		justifySelf: "center",
		alignSelf: "center",
		width: "25%",
	},
	createGroupImage: {
		width: 50,
		height: 50,
	},
	createGroupTextContainer: {
		justifyContent: "center",
		textAlign: "center",
		padding: 20,
		width: "60%",
	},
	createGroupText: {
		color: "#333",
		fontSize: 22,
	},
});
export default Groups;
