import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Header from "./components/Header";
import ModalInfo from "./components/Modal";
import Section from "./components/Section";
import { SCREEN_WIDTH } from "./constants/constants";
import { Item, ItemMenu } from "./constants/interfaces";

const API_URL = "https://mcdonalds.trio.dev/menu";

export default function App() {
	// done with mocked data:
	// const [franchise, setFranchise] = useState(FranchiseData[0]);
	const [franchise, setFranchise] = useState();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [selected, setItemSelected] = useState<Item | null>(null);
	useEffect(() => {
		try {
			setLoading(true);
			fetch(API_URL)
				.then(async (res) => {
					const data = await res.json();
					if (data) {
						setFranchise(data);
						setLoading(false);
					}
				})
				.catch(() => {
					setLoading(false);
					Alert.alert("Error", "There was a problem retrieving data");
				});
		} catch (error) {
			Alert.alert("Error", "There was a problem retrieving data");
			setLoading(false);
		}
	}, []);
	const handlePress = (itemMenu: Item) => {
		setShowModal(!showModal);
		setItemSelected(itemMenu);
	};
	return (
		<View style={styles.container}>
			<SafeAreaView />
			<Header />
			<ScrollView
				contentContainerStyle={{ paddingBottom: 40 }}
				style={styles.scrollView}
			>
				{franchise && !loading ? (
					franchise.menus.map((itemMenu: ItemMenu) => {
						return (
							<Section
								item={itemMenu}
								getItem={(item) => handlePress(item)}
							/>
						);
					})
				) : (
					<View style={{ marginTop: 35 }}>
						<ActivityIndicator size="large" />
					</View>
				)}
			</ScrollView>
			<ModalInfo
				visible={showModal}
				onDismiss={() => setShowModal(false)}
			>
				<Pressable
					style={styles.cancel}
					onPress={() => setShowModal(false)}
				>
					<Text style={styles.txtCancel}>Cancel</Text>
				</Pressable>
				<View style={styles.containerModal}>
					<Image
						source={{ uri: selected?.url }}
						resizeMode="contain"
						style={styles.containerImg}
					/>
					<Text style={styles.name}>{selected?.name}</Text>
					<View style={styles.priceWrapper}>
						<Text style={styles.price}>${selected?.price}</Text>
					</View>
					<View style={styles.descriptionContainer}>
						<Text style={styles.description}>
							{selected?.description}
						</Text>
					</View>
				</View>
			</ModalInfo>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	cancel: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		// backgroundColor: "red",
		alignSelf: "flex-end",
		marginRight: 10,
	},
	txtCancel: {
		color: "#0096FF",
	},
	containerModal: {
		flex: 0.9,
		alignItems: "center",
		paddingHorizontal: 10,
	},
	containerImg: {
		width: SCREEN_WIDTH * 0.7,
		height: "45%",
	},
	name: {
		fontSize: 25,
		fontWeight: "700",
		marginBottom: 10,
	},
	priceWrapper: {
		borderWidth: 1,
		borderRadius: 17,
		borderColor: "#000",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
		paddingVertical: 7,
		marginTop: 10,
	},
	price: {
		textAlign: "center",
	},
	descriptionContainer: {
		paddingHorizontal: 20,
		marginTop: 15,
	},
	description: {
		textAlign: "center",
	},
});
