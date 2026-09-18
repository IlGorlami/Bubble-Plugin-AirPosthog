function(properties, context) {
  if (!properties.uid) return;
  var props = AirPosthog.props(null, properties.properties_json);
  if (properties.email) props.email = properties.email;
  posthog.identify(properties.uid, props);
}
