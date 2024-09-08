import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const buyerContent = [
  {
    title: "Optimizing Wholesale Purchases",
    content:
      "Maximizing the efficiency of wholesale purchases involves understanding market trends and negotiating effectively. Buyers should regularly analyze supplier performance and market fluctuations to ensure they are making informed purchasing decisions. Leveraging data analytics can help in forecasting demand and optimizing inventory management, leading to better cost control and profit margins.",
  },
  {
    title: "Leveraging Bulk Discounts",
    content:
      "Bulk buying often comes with significant discounts, but it's essential to negotiate terms to get the best deal. Buyers should build strong relationships with suppliers to secure favorable pricing. Understanding the cost structure and potential savings can help buyers make strategic decisions that align with their business needs and financial goals.",
  },
  {
    title: "Understanding Market Dynamics",
    content:
      "Staying updated with market dynamics is crucial for professional buyers. Market trends, seasonality, and global events can impact pricing and availability. Regularly reviewing market reports and staying connected with industry news can provide valuable insights, enabling buyers to make well-informed decisions and adjust their strategies accordingly.",
  },
  {
    title: "Supplier Evaluation and Management",
    content:
      "Effective supplier management involves assessing supplier performance regularly. Buyers should evaluate suppliers based on factors such as reliability, quality, and pricing. Implementing a supplier scorecard system can help track performance metrics and address any issues promptly, ensuring a smooth supply chain and consistent product quality.",
  },
  {
    title: "Navigating Import Regulations",
    content:
      "Understanding import regulations is essential for buyers involved in international trade. Familiarize yourself with customs requirements, tariffs, and documentation needed for smooth importation. Staying compliant with regulations helps avoid delays and additional costs, ensuring that your goods arrive on time and within budget.",
  },
];

const farmerContent = [
  {
    title: "Understanding the Latest Indian Government Schemes for Farmers",
    content:
      "The Indian government has introduced several schemes to support farmers, including subsidies for purchasing agricultural equipment, financial aid for crop insurance, and loan schemes at low-interest rates. Programs like PM-KISAN provide direct income support to farmers. Staying informed about these schemes can help you access the necessary resources and improve your farming practices. Visit the official government website for detailed information on eligibility and application processes.",
  },
  {
    title: "Cost-Saving Tips for Efficient Farming",
    content:
      "Implementing cost-saving techniques can significantly enhance your farm's profitability. Consider using rainwater harvesting to reduce water costs and invest in efficient irrigation systems. Adopt organic farming practices to lower input costs and improve soil health. Additionally, maintaining your machinery and using precision farming techniques can help reduce operational expenses. Staying updated on cost-effective practices can lead to more sustainable and profitable farming operations.",
  },
  {
    title: "Effective Bidding Techniques in Agricultural Markets",
    content:
      "Mastering bidding techniques can help you secure better prices for your produce. Research the market rates and understand the demand for your crop before placing a bid. Start with a reasonable offer and be prepared to negotiate. Building good relationships with buyers can also improve your chances of getting favorable deals. Keep track of market trends and adjust your bidding strategy accordingly to maximize your returns.",
  },
  {
    title: "Utilizing Technology for Modern Farming Practices",
    content:
      "Embracing technology can revolutionize farming practices. Use mobile apps for weather forecasts, soil health monitoring, and crop management. GPS-guided tractors and drones can enhance precision in planting and harvesting. Technology also aids in efficient resource management and data analysis, leading to better decision-making and increased productivity. Adopting modern technology can help you stay competitive and improve the overall efficiency of your farm.",
  },
  {
    title: "Guidelines for Applying for Agricultural Loans",
    content:
      "Applying for agricultural loans involves several steps. First, ensure you have a clear understanding of the loan requirements and prepare the necessary documentation, including proof of land ownership and a detailed business plan. Compare different loan schemes to find one that best suits your needs. Follow the application process meticulously and seek advice from financial experts if needed. Timely and proper management of loans can support your farm's growth and development.",
  },
];

const Blogs = ({ userType }) => {
  const content = userType === "buyer" ? buyerContent : farmerContent;

  return (
    <ScrollView style={styles.container}>
      <Text className="font-mblack text-xl" style={styles.header}>
        Blogs
      </Text>
      {content.map((blog, index) => (
        <View
          key={index}
          className="border-2 border-gray-500"
          style={styles.blogPost}
        >
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogContent}>{blog.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  blogPost: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  blogContent: {
    padding: 10,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
  },
});

export default Blogs;
