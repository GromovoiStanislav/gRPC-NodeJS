// source: prices.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.bitcoinPrices.Date', null, global);
goog.exportSymbol('proto.bitcoinPrices.Empty', null, global);
goog.exportSymbol('proto.bitcoinPrices.Price', null, global);
goog.exportSymbol('proto.bitcoinPrices.Prices', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bitcoinPrices.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bitcoinPrices.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bitcoinPrices.Price.displayName = 'proto.bitcoinPrices.Price';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bitcoinPrices.Prices = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bitcoinPrices.Prices.repeatedFields_, null);
};
goog.inherits(proto.bitcoinPrices.Prices, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bitcoinPrices.Prices.displayName = 'proto.bitcoinPrices.Prices';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bitcoinPrices.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bitcoinPrices.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bitcoinPrices.Empty.displayName = 'proto.bitcoinPrices.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bitcoinPrices.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bitcoinPrices.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bitcoinPrices.Date.displayName = 'proto.bitcoinPrices.Date';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bitcoinPrices.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.bitcoinPrices.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bitcoinPrices.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    open: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    high: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    changepercentfromlastmonth: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bitcoinPrices.Price}
 */
proto.bitcoinPrices.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bitcoinPrices.Price;
  return proto.bitcoinPrices.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bitcoinPrices.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bitcoinPrices.Price}
 */
proto.bitcoinPrices.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOpen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHigh(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setChangepercentfromlastmonth(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bitcoinPrices.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bitcoinPrices.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bitcoinPrices.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getChangepercentfromlastmonth();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string Date = 1;
 * @return {string}
 */
proto.bitcoinPrices.Price.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float Price = 2;
 * @return {number}
 */
proto.bitcoinPrices.Price.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float Open = 3;
 * @return {number}
 */
proto.bitcoinPrices.Price.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float High = 4;
 * @return {number}
 */
proto.bitcoinPrices.Price.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float ChangePercentFromLastMonth = 5;
 * @return {number}
 */
proto.bitcoinPrices.Price.prototype.getChangepercentfromlastmonth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setChangepercentfromlastmonth = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string Volume = 6;
 * @return {string}
 */
proto.bitcoinPrices.Price.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bitcoinPrices.Price} returns this
 */
proto.bitcoinPrices.Price.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bitcoinPrices.Prices.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bitcoinPrices.Prices.prototype.toObject = function(opt_includeInstance) {
  return proto.bitcoinPrices.Prices.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bitcoinPrices.Prices} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Prices.toObject = function(includeInstance, msg) {
  var f, obj = {
    pricesList: jspb.Message.toObjectList(msg.getPricesList(),
    proto.bitcoinPrices.Price.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bitcoinPrices.Prices}
 */
proto.bitcoinPrices.Prices.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bitcoinPrices.Prices;
  return proto.bitcoinPrices.Prices.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bitcoinPrices.Prices} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bitcoinPrices.Prices}
 */
proto.bitcoinPrices.Prices.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bitcoinPrices.Price;
      reader.readMessage(value,proto.bitcoinPrices.Price.deserializeBinaryFromReader);
      msg.addPrices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bitcoinPrices.Prices.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bitcoinPrices.Prices.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bitcoinPrices.Prices} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Prices.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPricesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bitcoinPrices.Price.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Price prices = 1;
 * @return {!Array<!proto.bitcoinPrices.Price>}
 */
proto.bitcoinPrices.Prices.prototype.getPricesList = function() {
  return /** @type{!Array<!proto.bitcoinPrices.Price>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bitcoinPrices.Price, 1));
};


/**
 * @param {!Array<!proto.bitcoinPrices.Price>} value
 * @return {!proto.bitcoinPrices.Prices} returns this
*/
proto.bitcoinPrices.Prices.prototype.setPricesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bitcoinPrices.Price=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bitcoinPrices.Price}
 */
proto.bitcoinPrices.Prices.prototype.addPrices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bitcoinPrices.Price, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bitcoinPrices.Prices} returns this
 */
proto.bitcoinPrices.Prices.prototype.clearPricesList = function() {
  return this.setPricesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bitcoinPrices.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.bitcoinPrices.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bitcoinPrices.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bitcoinPrices.Empty}
 */
proto.bitcoinPrices.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bitcoinPrices.Empty;
  return proto.bitcoinPrices.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bitcoinPrices.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bitcoinPrices.Empty}
 */
proto.bitcoinPrices.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bitcoinPrices.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bitcoinPrices.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bitcoinPrices.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bitcoinPrices.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.bitcoinPrices.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bitcoinPrices.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Date.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bitcoinPrices.Date}
 */
proto.bitcoinPrices.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bitcoinPrices.Date;
  return proto.bitcoinPrices.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bitcoinPrices.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bitcoinPrices.Date}
 */
proto.bitcoinPrices.Date.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bitcoinPrices.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bitcoinPrices.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bitcoinPrices.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bitcoinPrices.Date.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Date = 1;
 * @return {string}
 */
proto.bitcoinPrices.Date.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bitcoinPrices.Date} returns this
 */
proto.bitcoinPrices.Date.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.bitcoinPrices);
